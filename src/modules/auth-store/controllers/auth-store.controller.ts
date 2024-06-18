
import { Body, Controller, Post} from '@nestjs/common';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';
import { StoreAuthService } from '../services/auth-store.service';


@Controller('auth-store')
export class AuthStoreController {

  constructor(
    private readonly authUserService: StoreAuthService,
  ) {}

  @Post('login')
  async loginUser(@Body() authUserDTO: AuthStoreDTO) {
    return this.authUserService.storeAuthentication(authUserDTO);
  }
}




  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login1(@Body('email') email: string, @Body('senha') senha: string) {
  //   try {
  //     const token = await this.authTesteService.login(email, senha);
  //     return { access_token: token };
  //   } catch (error) {
  //     throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  //   }
  // }
