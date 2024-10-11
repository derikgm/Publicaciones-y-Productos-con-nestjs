import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategie } from './strategies/jwt.strategie';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategie],
  exports: [TypeOrmModule, JwtStrategie, PassportModule, JwtModule, AuthService],
  imports:[
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([]),

    // Configuracion del JWT
    JwtModule.register({
      global: true,
      secret: process.env.CLAVE_SECRETA,
      signOptions: {expiresIn: '15m'}
    }),
    // definir la estrategia por defecto
    PassportModule.register({ defaultStrategy: 'jwt'}),
  ]
})
export class AuthModule {}
