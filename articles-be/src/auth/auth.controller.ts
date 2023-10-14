import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../users/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() user: UserDto) {
    return this.service.login(user.name, user.password);
  }

  @Post('register')
  async register(@Body() payload: UserDto) {
    return this.service.register(payload);
  }
}
