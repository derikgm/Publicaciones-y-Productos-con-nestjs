import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {Request} from 'express';
import { Usuario } from 'src/users/entities/Usuario.entity';

export const GetUsuario = createParamDecorator(
    (data: string, execution: ExecutionContext) => {
        const req: Request = execution.switchToHttp().getRequest()

        const usuario = req.user as Usuario;

        return (data) ? usuario[data] : usuario;
    }
);
