import { RolesValidos } from '../interfaces/roles-validos.interface';
export declare const Auth: (...rol: RolesValidos[]) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
