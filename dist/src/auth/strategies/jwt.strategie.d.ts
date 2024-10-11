import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Usuario } from 'src/users/entities/Usuario.entity';
declare const JwtStrategie_base: new (...args: any[]) => any;
export declare class JwtStrategie extends JwtStrategie_base {
    private readonly usuarioRepository;
    private readonly configService;
    constructor(usuarioRepository: Repository<Usuario>, configService: ConfigService);
    validate(payload: JwtPayload): Promise<Usuario>;
}
export {};
