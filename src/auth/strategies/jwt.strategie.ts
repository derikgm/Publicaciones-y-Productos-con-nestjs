import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { Usuario } from 'src/users/entities/Usuario.entity';


@Injectable()
export class JwtStrategie extends PassportStrategy(Strategy){

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        private readonly configService: ConfigService
    ){
        super({
            secretOrKey: configService.get('CLAVE_SECRETA'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    // funcion para validar
    async validate(payload: JwtPayload): Promise<Usuario>{

        const {nombreUsuario, } = payload;

        const usuario = await this.usuarioRepository.findOne({
            where:{nombreUsuario},
        })

        if(!usuario)
            throw new UnauthorizedException('Token no valido')

        return usuario; //los datos se guardan automaticamente en el req.user;

    }

}