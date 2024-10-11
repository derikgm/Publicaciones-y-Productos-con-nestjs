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
exports.UsersService = void 0;
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Usuario_entity_1 = require("../users/entities/Usuario.entity");
const tratado_excepciones_1 = require("../common/helpers/tratado-excepciones");
let UsersService = class UsersService {
    constructor(usuarioRepository, jwt) {
        this.usuarioRepository = usuarioRepository;
        this.jwt = jwt;
        this.logger = new common_1.Logger('AuthService');
    }
    async crearUsuario(createUsuarioDto, usuario) {
        createUsuarioDto.password = bcrypt.hashSync(createUsuarioDto.password, 10);
        try {
            const usuario = this.usuarioRepository.create(createUsuarioDto);
            await this.usuarioRepository.insert(usuario);
            delete createUsuarioDto.password;
            return { ok: true, message: 'usuario creado', usuario: createUsuarioDto };
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Usuario');
        }
    }
    async actualizarPassword(nombreUsuario, actualizarPasswordDto) {
        if (actualizarPasswordDto.passwordAntigua == actualizarPasswordDto.passwordNueva)
            throw new common_1.BadRequestException('Las passwords son las mismas');
        const usuario = await this.obtenerUsuario(nombreUsuario, actualizarPasswordDto.passwordAntigua);
        try {
            usuario.password = bcrypt.hashSync(actualizarPasswordDto.passwordNueva, 10);
            return this.usuarioRepository.save(usuario);
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Usuario');
        }
    }
    async findAll() {
        return await this.usuarioRepository.find();
    }
    async eliminarUsuario(nombreUsuario) {
        const usuario = await this.obtenerUsuario(nombreUsuario);
        try {
            await this.usuarioRepository.delete(usuario);
            return { ok: true, message: 'Usuario eliminado' };
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Usuario');
        }
    }
    async obtenerUsuario(nombreUsuario, password) {
        const usuario = await this.usuarioRepository.findOne({
            where: { nombreUsuario },
        });
        if (!usuario)
            throw new common_1.NotFoundException(`Ese usuario no existe`);
        if (password)
            if (!bcrypt.compareSync(password, usuario.password))
                throw new common_1.BadRequestException('Password incorrecta');
        return usuario;
    }
    generarToken(payload) {
        return this.jwt.sign(payload);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map