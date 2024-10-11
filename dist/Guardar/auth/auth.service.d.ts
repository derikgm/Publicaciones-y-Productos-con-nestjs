import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        mensaje: string;
        usuario: CreateUserDto & User;
    }>;
    findAll(): void;
    findOne(usuario: string): void;
    update(updateUserDto: UpdateUserDto): Promise<User[]>;
    remove(usuario: string): Promise<void>;
}
