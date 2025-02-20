"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const rol_protected_decorator_1 = require("../decorators/rol-protected.decorator");
let RolGuard = class RolGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const rolesValidos = this.reflector.get(rol_protected_decorator_1.META_ROLES, context.getHandler());
        const req = context.switchToHttp().getRequest();
        const usuario = req.user;
        if (rolesValidos.length == 0)
            return true;
        for (const rol of rolesValidos)
            if (usuario.rol == rol)
                return true;
        return false;
    }
};
exports.RolGuard = RolGuard;
exports.RolGuard = RolGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RolGuard);
//# sourceMappingURL=rol-guard.guard.js.map