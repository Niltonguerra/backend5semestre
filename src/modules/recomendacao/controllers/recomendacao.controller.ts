import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuardUser } from 'src/modules/auth-user/guards/jwt-auth-user.guard';
import { RolesGuardUser } from 'src/modules/auth-user/guards/roles-user.guard';
import { ProductService } from 'src/modules/product/services/product.service';
import { UserService } from 'src/modules/user/services/user.service';
import { recomendacaoDTO } from '../dtos/recomendacaoDTO';

@Controller('recomendacao')
export class RecomendacaoController {


  constructor(
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  // recomendações de produtos para um usuário
  @UseGuards(JwtAuthGuardUser, RolesGuardUser)
  @Get("usuario")
  async productRecomendation(@Request() req) {

    const userId = req.user.userId;


    console.log('user:', userId);


    const user = await this.userService.findById(userId);

    if (!user) {
      return [];
    }

    const products = await this.productService.findAllRecomendation();

    const recommendations:recomendacaoDTO[] = products.map(product => ({
      nome: product.nome,
      preco: product.preco,
      descricao: product.descricao,
      foto: product.foto,
      quantidade: product.quantidade,
      tags: product.tags,
      criado_em:  product.criado_em,
      atualizado_em: product.atualizado_em,
      similarity: this.jaccardSimilarity(user.tags, product.tags),
    }));

    // Ordenar produtos pela similaridade (maior primeiro)
    recommendations.sort((a, b) => b.similarity - a.similarity);

    const recomendacao = recommendations.length > 0 ? recommendations : { message: 'No recommendations found' };
    
    return recomendacao
  }








  // Função para calcular a similaridade de Jaccard
  private jaccardSimilarity(tags1: string[], tags2: string[]): number {

    // pega as tags que estão presentes em ambos os conjuntos, ou seja, estão presentes tanto em 
    // usuário quando em produto
    const intersection = tags1.filter(tag => tags2.includes(tag));

    // pega as tags que são únicos em ambos os conjuntos.
    const union = [...new Set([...tags1, ...tags2])];

    return intersection.length / union.length;
  }


}
