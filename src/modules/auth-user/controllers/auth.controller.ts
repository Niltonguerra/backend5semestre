import { Body, Controller, Post} from '@nestjs/common';
import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { AuthUserService } from '../services/authUser.service';


@Controller('auth-user')
export class AuthController {

  constructor(
    private readonly authUserService: AuthUserService,
  ) {}

  @Post('login')
  async loginUser(@Body() authUserDTO: AuthUserDTO) {
    return this.authUserService.UserAuthentication(authUserDTO);
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
