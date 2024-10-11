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
exports.JwtStrategie = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const Usuario_entity_1 = require("../../users/entities/Usuario.entity");
let JwtStrategie = class JwtStrategie extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usuarioRepository, configService) {
        super({
            secretOrKey: configService.get('CLAVE_SECRETA'),
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()
        });
        this.usuarioRepository = usuarioRepository;
        this.configService = configService;
    }
    async validate(payload) {
        const { nombreUsuario, } = payload;
        const usuario = await this.usuarioRepository.findOne({
            where: { nombreUsuario },
        });
        if (!usuario)
            throw new common_1.UnauthorizedException('Token no valido');
        return usuario;
    }
};
exports.JwtStrategie = JwtStrategie;
exports.JwtStrategie = JwtStrategie = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        config_1.ConfigService])
], JwtStrategie);
//# sourceMappingURL=jwt.strategie.js.map