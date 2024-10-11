import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<{
        mensaje: string;
        usuario: CreateUserDto & import("./entities/user.entity").User;
    }>;
    findAll(): void;
    findOne(user: string): void;
    update(updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User[]>;
    remove(user: string): Promise<void>;
}
