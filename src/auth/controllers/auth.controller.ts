
import { Body, Controller, Post } from '@nestjs/common';
import { AuthUserDTO } from '../dtos/AuthUser.dto';
import { AuthStoreDTO } from '../dtos/AuthStore.dto';
import { AuthUserService } from '../services/authUser.service';
import { AuthStoreService } from '../services/authStore.service';



@Controller('auth')
export class AuthController {

  constructor(
    private readonly AuthUserservice: AuthUserService,
    private readonly AuthStoreservice: AuthStoreService
  ) {}

  @Post('user')
  async validateLoginUser(@Body() validateLoginDTO: AuthUserDTO) {

    return this.AuthUserservice.validateLoginUser(validateLoginDTO);

  }

  @Post('store')
  async validateLoginStore(@Body() validateLoginDTO: AuthStoreDTO) {

    return this.AuthStoreservice.validateLoginStore(validateLoginDTO);

  }

}
