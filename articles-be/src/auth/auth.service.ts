import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserDto } from '../users/user.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username, pass) {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException();
    }

    const isValid = await bcrypt.compare(pass, user.password);

    if (!isValid) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, name: user.name, email: user.email };
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: jwtConstants.secret,
        expiresIn: '365d',
      }),
    };
  }

  async register({ password, name, email }: UserDto) {
    const user = await this.usersService.findOne({ email });

    if (user) {
      throw new ConflictException('User already exist');
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.create(name, email, hashedPassword);
    return result;
  }
}
