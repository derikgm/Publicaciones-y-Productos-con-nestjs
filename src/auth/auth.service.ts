import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../users/entities/Usuario.entity';
import { tratoBDExcepciones } from 'src/common/helpers/tratado-excepciones';
import { CreateUsuarioDto } from 'src/users/dto/create-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@Injectable()
export class AuthService {
 
  private logger = new Logger('AuthService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    private readonly jwt: JwtService,

  ){}
  
  async logearUsuario(loginUsuarioDto: LoginUsuarioDto){
    const usuario: Usuario = await this.obtenerUsuario(loginUsuarioDto.nombreUsuario, loginUsuarioDto.password);

    const token = this.generarToken({
      nombreUsuario: usuario.nombreUsuario,
    });

    delete usuario.password

    return {
      token,
      usuario
    }
  }


  async refrescarToken(usuario: Usuario){
    const token = this.generarToken({
      nombreUsuario: usuario.nombreUsuario,
    })

    return {token}
  }

/// FUNCIONES DE AYUDA ////

  async obtenerUsuario(nombreUsuario: string, password?: string ): Promise<Usuario>{

    const usuario = await this.usuarioRepository.findOne({
      where: {nombreUsuario},
    })

    if(!usuario)
      throw new NotFoundException(`Ese usuario no existe`);

    if(password)
      if(!bcrypt.compareSync(password, usuario.password))
        throw new BadRequestException('Password incorrecta')

    return usuario;

  }

  /////// FUNCIONES PRIVADAS ////
  private generarToken(payload: any){
    return this.jwt.sign(payload);
  }


}
