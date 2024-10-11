import { RolesValidos } from '../interfaces/roles-validos.interface';
export declare const META_ROLES = "roles";
export declare const RolProtected: (...roles: RolesValidos[]) => import("@nestjs/common").CustomDecorator<string>;
