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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_decorator_1 = require("./decorators/auth.decorator");
const get_usuario_decorator_1 = require("./decorators/get-usuario.decorator");
const Usuario_entity_1 = require("../users/entities/Usuario.entity");
const swagger_1 = require("@nestjs/swagger");
const login_usuario_dto_1 = require("./dto/login-usuario.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async logearUsuario(loginUsuarioDto, res) {
        res.status(200).json(await this.authService.logearUsuario(loginUsuarioDto));
    }
    refrescarToken(usuario) {
        return this.authService.refrescarToken(usuario);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El usuario ha sido creado', type: Usuario_entity_1.Usuario }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Token invalido' }),
    (0, common_1.Post)('autenticar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_usuario_dto_1.LoginUsuarioDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logearUsuario", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Devuelve un usuario en general', type: Usuario_entity_1.Usuario }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, common_1.Get)('refrescar-token'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, get_usuario_decorator_1.GetUsuario)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario_entity_1.Usuario]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refrescarToken", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map