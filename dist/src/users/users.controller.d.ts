import { UsersService } from './users.service';
import { Usuario } from './entities/Usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ActualizarPasswordDto } from './dto/actualizar-password.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    crearUsuario(createUsuarioDto: CreateUsuarioDto, usuario: Usuario): Promise<{
        ok: boolean;
        message: string;
        usuario: CreateUsuarioDto;
    }>;
    findAll(): Promise<Usuario[]>;
    actualizarPassword(actualizarPasswordDto: ActualizarPasswordDto, usuario: string): Promise<Usuario>;
    eliminarUsuario(nombreUsuario: string): Promise<{
        ok: boolean;
        message: string;
    }>;
}
