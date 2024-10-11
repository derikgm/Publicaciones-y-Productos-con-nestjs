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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const tratado_excepciones_1 = require("../common/helpers/tratado-excepciones");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async crearProduct(createProductDto) {
        try {
            const product = this.productRepository.create(createProductDto);
            await this.productRepository.insert(product);
            return { ok: true, message: 'producto creado', product: createProductDto };
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Product');
        }
    }
    async obtenerTodos() {
        return await this.productRepository.find();
    }
    async obtenerProducto(id) {
        return await this.obtenerProduct(id);
    }
    async actualizarProducto(id, updateProductDto) {
        const producto = await this.obtenerProduct(id);
        producto.categoria = updateProductDto.categoria;
        producto.nombreProducto = updateProductDto.nombreProducto;
        return await this.productRepository.save(producto);
    }
    async eliminarProduct(nombreProduct) {
        const product = await this.obtenerProduct(nombreProduct);
        try {
            await this.productRepository.delete(product);
            return { ok: true, message: 'Product eliminado' };
        }
        catch (error) {
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'Product');
        }
    }
    async obtenerProduct(id) {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product)
            throw new common_1.NotFoundException(`Ese product no existe`);
        return product;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map