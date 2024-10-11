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
exports.LoginUsuarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginUsuarioDto {
}
exports.LoginUsuarioDto = LoginUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'miguel23',
        description: 'el nombre de usuario',
        uniqueItems: true
    }),
    (0, class_validator_1.IsString)({ message: 'Valor inadmisible' }),
    (0, class_validator_1.MinLength)(4, {
        message: 'El nombre de usuario debe de tener 4 caracteres o más'
    }),
    __metadata("design:type", String)
], LoginUsuarioDto.prototype, "nombreUsuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'mig3lP3r3s',
        description: 'password del usuario'
    }),
    (0, class_validator_1.IsString)({ message: 'Valor inadmisible' }),
    (0, class_validator_1.Matches)(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'La contraseña necesita mayusculas, minusculas, y numeros'
    }),
    (0, class_validator_1.MinLength)(5, {
        message: 'La contraseña debe de tener 5 caracteres o más'
    }),
    __metadata("design:type", String)
], LoginUsuarioDto.prototype, "password", void 0);
//# sourceMappingURL=login-usuario.dto.js.map