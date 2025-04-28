import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async login(loginDto: LoginDto) {
    const { pseudonyme, password } = loginDto;
    const user = await this.usersService.validateUser(pseudonyme, password);

    const accessToken = this.jwtService.sign({
      sub: user.id,
      role: user.role,
    });

    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
        expiresIn: '7d',
      },
    );

    await this.usersService.updateRefreshToken(user.id, refreshToken);

    return { access_token: accessToken, refresh_token: refreshToken };
  }

  async refreshTokens(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token manquant');
    }

    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const user = await this.usersService.getUserById(payload.sub);

      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('Refresh token invalide');
      }

      const newAccessToken = this.jwtService.sign({
        sub: user.id,
        role: user.role,
      });

      const newRefreshToken = this.jwtService.sign(
        { sub: user.id },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      );

      await this.usersService.updateRefreshToken(user.id, newRefreshToken);

      return { access_token: newAccessToken, refresh_token: newRefreshToken };
    } catch (e) {
      throw new UnauthorizedException('Accès refusé');
    }
  }

  async logout(userId: number) {
    return this.usersService.removeRefreshToken(userId);
  }
}
