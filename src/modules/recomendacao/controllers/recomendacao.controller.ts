import { Body, Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { RolesGuardUser } from 'src/modules/auth-user/guards/roles-user.guard';
import { JwtStrategyUser } from 'src/modules/auth-user/strategies/jwt-user.strategy';
import { ProductService } from 'src/modules/product/services/product.service';
import { StoreService } from 'src/modules/store/services/store.service';
import { UserService } from 'src/modules/user/services/user.service';

@Controller('recomendacao')
export class RecomendacaoController {


  constructor(
    private readonly storeService: StoreService,
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  // recomendações de produtos para um usuário
  @UseGuards(JwtStrategyUser, RolesGuardUser)
  @Get("usuario")
  async productRecomendation(@Request() req) {

    const userId = req.user.userId;

    const user = await this.userService.findById(userId);

    if (!user) {
      return [];
    }

    const products = await this.productService.findAllRecomendation();

    const recommendations = products.map(product => ({
      productId: product._id,
      similarity: this.jaccardSimilarity(user.tags, product.tags),
    }));

    // Ordenar produtos pela similaridade (maior primeiro)
    recommendations.sort((a, b) => b.similarity - a.similarity);

    return recommendations.length > 0 ? recommendations : { message: 'No recommendations found' };
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
