import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { META_ROLES } from '../decorators/rol-protected.decorator';
import { RolesValidos } from '../../common/enums/roles-validos.interface';
import { Usuario } from 'src/users/entities/Usuario.entity';

@Injectable()
export class RolGuard implements CanActivate {

  constructor(
    private readonly reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {

    const rolesValidos: RolesValidos[] = this.reflector.get(META_ROLES, context.getHandler());

    const req: Request = context.switchToHttp().getRequest();

    const usuario = req.user as Usuario;

    if(rolesValidos.length == 0)
      return true;

    for (const rol of rolesValidos)
      if(usuario.rol == rol)
        return true;
    

    return false;
  }
}
