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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const Usuario_entity_1 = require("./entities/Usuario.entity");
const get_usuario_decorator_1 = require("../auth/decorators/get-usuario.decorator");
const create_usuario_dto_1 = require("./dto/create-usuario.dto");
const actualizar_password_dto_1 = require("./dto/actualizar-password.dto");
const roles_validos_interface_1 = require("../auth/interfaces/roles-validos.interface");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    crearUsuario(createUsuarioDto, usuario) {
        return this.usersService.crearUsuario(createUsuarioDto, usuario);
    }
    findAll() {
        return this.usersService.findAll();
    }
    actualizarPassword(actualizarPasswordDto, usuario) {
        return this.usersService.actualizarPassword(usuario, actualizarPasswordDto);
    }
    eliminarUsuario(nombreUsuario) {
        return this.usersService.eliminarUsuario(nombreUsuario);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 202, description: 'Devuelve un usuario actualizado', type: Usuario_entity_1.Usuario }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, common_1.Post)('crear-usuario'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_usuario_decorator_1.GetUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuario_dto_1.CreateUsuarioDto, Usuario_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "crearUsuario", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cuantos usuarios hay', type: Usuario_entity_1.Usuario[10] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, auth_decorator_1.Auth)(roles_validos_interface_1.RolesValidos.administrador),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 202, description: 'El usuario ha sido creado', type: Usuario_entity_1.Usuario }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Token invalido' }),
    (0, common_1.Patch)('actualizar-password'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_usuario_decorator_1.GetUsuario)('nombreUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [actualizar_password_dto_1.ActualizarPasswordDto, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "actualizarPassword", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario eliminado correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, common_1.Delete)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)('nombreUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "eliminarUsuario", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map