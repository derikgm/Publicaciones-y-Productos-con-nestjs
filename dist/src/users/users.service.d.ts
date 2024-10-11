import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Usuario } from '../users/entities/Usuario.entity';
import { CreateUsuarioDto } from 'src/users/dto/create-usuario.dto';
import { ActualizarPasswordDto } from './dto/actualizar-password.dto';
export declare class UsersService {
    private readonly usuarioRepository;
    private readonly jwt;
    private logger;
    constructor(usuarioRepository: Repository<Usuario>, jwt: JwtService);
    crearUsuario(createUsuarioDto: CreateUsuarioDto, usuario: Usuario): Promise<{
        ok: boolean;
        message: string;
        usuario: CreateUsuarioDto;
    }>;
    actualizarPassword(nombreUsuario: string, actualizarPasswordDto: ActualizarPasswordDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    eliminarUsuario(nombreUsuario: string): Promise<{
        ok: boolean;
        message: string;
    }>;
    obtenerUsuario(nombreUsuario: string, password?: string): Promise<Usuario>;
    private generarToken;
}
