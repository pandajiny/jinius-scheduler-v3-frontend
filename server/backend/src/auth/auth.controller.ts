import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @Get('user')
  // user(@Request() req): User {
  //   return req.user as User;
  // }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(`login requested`, req.user);
    return this.authService.doLogin(req.user).catch(err => {
      throw new HttpException(err, HttpStatus.UNAUTHORIZED);
    });
  }

  @Post('signup')
  async signup(@Body() request: SignUpRequest): Promise<LoginResult> {
    console.log(`signup requested`, request);

    const { email, name, password } = request;
    const _password = this.authService.hashPassword(password);

    return this.authService
      .doSignup({
        email,
        name,
        _password,
      })
      .catch(err => {
        throw new HttpException(err, HttpStatus.FORBIDDEN);
      });
  }
}
