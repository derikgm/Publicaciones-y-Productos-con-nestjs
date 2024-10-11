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
exports.Post = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'cd512312-b2h3-ka92-bjk4hlm1o2i3',
        description: 'Id del producto',
        uniqueItems: true
    }),
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Venta de tubos de pasta',
        description: 'nombre del producto'
    }),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Post.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Salud dental',
        description: 'categoria del producto'
    }),
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Post.prototype, "tema", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)()
], Post);
//# sourceMappingURL=post.entity.js.map