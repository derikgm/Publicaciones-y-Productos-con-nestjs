import { SetMetadata } from '@nestjs/common';
import { RolesValidos } from '../../common/enums/roles-validos.interface';

export const META_ROLES = 'roles'

export const RolProtected = (...roles: RolesValidos[]) =>{
    return SetMetadata(META_ROLES, roles);
} 