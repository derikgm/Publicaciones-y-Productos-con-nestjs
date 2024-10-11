import { Controller, Get, Post, Body, Patch, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { Auth } from './decorators/auth.decorator';
import { GetUsuario } from './decorators/get-usuario.decorator';
import { Usuario } from '../users/entities/Usuario.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@ApiTags('Users')
@Controller('auth')
export class AuthController {
  
  constructor(private readonly authService: AuthService) {}

  @ApiResponse({status: 201, description: 'El usuario ha sido creado', type: Usuario})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 403, description: 'Token invalido'})
  @Post('autenticar')
  async logearUsuario( @Body() loginUsuarioDto: LoginUsuarioDto, @Res() res: Response){
    res.status(200).json(await this.authService.logearUsuario(loginUsuarioDto));
  }

  @ApiResponse({status: 200, description: 'Devuelve un usuario en general', type: Usuario})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Get('refrescar-token')
  @Auth()
  refrescarToken(@GetUsuario() usuario: Usuario){
    return this.authService.refrescarToken(usuario);
  }

 

}
