import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../users/entities/Usuario.entity';
import { tratoBDExcepciones } from 'src/common/helpers/tratado-excepciones';
import { CreateUsuarioDto } from 'src/users/dto/create-usuario.dto';
import { ActualizarPasswordDto } from './dto/actualizar-password.dto';

@Injectable()
export class UsersService {
  
  private logger = new Logger('AuthService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    private readonly jwt: JwtService,

  ){}
  
  async crearUsuario(createUsuarioDto: CreateUsuarioDto, usuario: Usuario){

    createUsuarioDto.password = bcrypt.hashSync(createUsuarioDto.password, 10);

    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto)

      await this.usuarioRepository.insert(usuario);
      delete createUsuarioDto.password;

      return {ok:true, message: 'usuario creado', usuario: createUsuarioDto}
    } catch (error) {
      tratoBDExcepciones(error, 'Usuario')
    }
    
  }
  
  async actualizarPassword( nombreUsuario: string, actualizarPasswordDto: ActualizarPasswordDto){

    if(actualizarPasswordDto.passwordAntigua == actualizarPasswordDto.passwordNueva)
      throw new BadRequestException('Las passwords son las mismas');
    
    const usuario = await this.obtenerUsuario(nombreUsuario, actualizarPasswordDto.passwordAntigua)

    try {
      usuario.password = bcrypt.hashSync(actualizarPasswordDto.passwordNueva,10);

      return this.usuarioRepository.save(usuario);
    } catch (error) {
      tratoBDExcepciones(error, 'Usuario');
    }
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }
 

  async eliminarUsuario(nombreUsuario: string){

    const usuario: Usuario = await this.obtenerUsuario(nombreUsuario);

    try {
      await this.usuarioRepository.delete(usuario);
      return {ok: true, message: 'Usuario eliminado'}
    } catch (error) {
      tratoBDExcepciones(error, 'Usuario');
    }
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
