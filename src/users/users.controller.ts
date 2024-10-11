import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiResponse } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Usuario } from './entities/Usuario.entity';
import { GetUsuario } from 'src/auth/decorators/get-usuario.decorator';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ActualizarPasswordDto } from './dto/actualizar-password.dto';
import { RolesValidos } from 'src/common/enums/roles-validos.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({status: 202, description: 'Devuelve un usuario actualizado', type: Usuario})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Post('crear-usuario')
  @Auth()
  crearUsuario(@Body() createUsuarioDto: CreateUsuarioDto, @GetUsuario() usuario: Usuario){
    return this.usersService.crearUsuario(createUsuarioDto, usuario)
  }

  @ApiResponse({status: 200, description: 'cuantos usuarios hay', type: Usuario[10]})
  @ApiResponse({status: 400, description: 'Bad request'})
  @Auth(RolesValidos.administrador)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse({status: 202, description: 'El usuario ha sido creado', type: Usuario})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 403, description: 'Token invalido'})
  @Patch('actualizar-password')
  @Auth()
  actualizarPassword(
    @Body() actualizarPasswordDto: ActualizarPasswordDto, 
    @GetUsuario('nombreUsuario') usuario: string
    ){
    return this.usersService.actualizarPassword(usuario, actualizarPasswordDto)
  }

  @ApiResponse({status: 200, description: 'Usuario eliminado correctamente'})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Delete()
  @Auth()
  eliminarUsuario(@Body('nombreUsuario') nombreUsuario: string){
    return this.usersService.eliminarUsuario(nombreUsuario)
  }
}
