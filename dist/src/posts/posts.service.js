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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const post_entity_1 = require("./entities/post.entity");
const tratado_excepciones_1 = require("../common/helpers/tratado-excepciones");
let PostsService = class PostsService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async crearPost(createPostDto) {
        try {
            const post = this.postRepository.create(createPostDto);
            await this.postRepository.insert(post);
            return { ok: true, message: 'post creado', post: createPostDto };
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Post');
        }
    }
    async obtenerTodos() {
        return await this.postRepository.find();
    }
    async getPost(id) {
        return await this.obtenerPost(id);
    }
    async actualizarPost(id, updatePostDto) {
        const post = await this.obtenerPost(id);
        return await this.postRepository.save(post);
    }
    async eliminarPost(nombrePost) {
        const post = await this.obtenerPost(nombrePost);
        try {
            await this.postRepository.delete(post);
            return { ok: true, message: 'Post eliminado' };
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Post');
        }
    }
    async obtenerPost(id) {
        const post = await this.postRepository.findOne({
            where: { id },
        });
        if (!post)
            throw new common_1.NotFoundException(`Ese post no existe`);
        return post;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map