import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

/**
 * Módulo de autenticação que configura JWT e Passport.
 * Injeta serviços do usuário e configura a estratégia JWT.
 */
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'jwt-secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
