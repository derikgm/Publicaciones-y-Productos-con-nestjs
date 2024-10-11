import { AuthService } from './auth.service';
import { Response } from 'express';
import { Usuario } from '../users/entities/Usuario.entity';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logearUsuario(loginUsuarioDto: LoginUsuarioDto, res: Response): Promise<void>;
    refrescarToken(usuario: Usuario): Promise<{
        token: string;
    }>;
}
