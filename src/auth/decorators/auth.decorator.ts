import { UseGuards, applyDecorators } from '@nestjs/common';
import { RolGuard } from '../guards/rol-guard.guard';
import { RolProtected } from './rol-protected.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesValidos } from '../../common/enums/roles-validos.interface';

export const Auth = (...rol: RolesValidos[]) => {

    return applyDecorators(
        RolProtected(...rol),//decorador
        UseGuards(AuthGuard(), RolGuard) //los guards
    )

};
