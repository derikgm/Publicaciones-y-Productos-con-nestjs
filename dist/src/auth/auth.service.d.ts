import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Usuario } from '../users/entities/Usuario.entity';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
export declare class AuthService {
    private readonly usuarioRepository;
    private readonly jwt;
    private logger;
    constructor(usuarioRepository: Repository<Usuario>, jwt: JwtService);
    logearUsuario(loginUsuarioDto: LoginUsuarioDto): Promise<{
        token: string;
        usuario: Usuario;
    }>;
    refrescarToken(usuario: Usuario): Promise<{
        token: string;
    }>;
    obtenerUsuario(nombreUsuario: string, password?: string): Promise<Usuario>;
    private generarToken;
}
