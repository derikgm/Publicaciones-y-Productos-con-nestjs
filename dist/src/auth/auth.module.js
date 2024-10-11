"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_strategie_1 = require("./strategies/jwt.strategie");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategie_1.JwtStrategie],
        exports: [typeorm_1.TypeOrmModule, jwt_strategie_1.JwtStrategie, passport_1.PassportModule, jwt_1.JwtModule, auth_service_1.AuthService],
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([]),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.CLAVE_SECRETA,
                signOptions: { expiresIn: '15m' }
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
        ]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map