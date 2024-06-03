import { Body, Controller, Get, Param } from '@nestjs/common';
import { ProductService } from 'src/product/services/product.service';
import { StoreService } from 'src/store/services/store.service';
import { UserService } from 'src/user/services/user.service';

@Controller('recomendacao')
export class RecomendacaoController {


  constructor(
    private readonly storeService: StoreService,
    private readonly productService: ProductService,
    private readonly userService: UserService,
  ) {}

  // recomendações de produtos para um usuário
  @Get("produto/:id")
  async productRecomendation(@Param('id') userId: string) {

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
