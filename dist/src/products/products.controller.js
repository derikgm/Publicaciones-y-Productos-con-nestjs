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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const product_entity_1 = require("./entities/product.entity");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    create(createProductDto) {
        return this.productsService.crearProduct(createProductDto);
    }
    findAll() {
        return this.productsService.obtenerTodos();
    }
    findOne(id) {
        return this.productsService.obtenerProducto(id);
    }
    update(nombreproducto, updateProductDto) {
        return this.productsService.actualizarProducto(nombreproducto, updateProductDto);
    }
    remove(nombreproducto) {
        return this.productsService.eliminarProduct(nombreproducto);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 201, description: 'El producto ha sido creado', type: product_entity_1.Product }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Token invalido' }),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'cuantos productos hay', type: product_entity_1.Product[10] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Devuelve un producto en general', type: product_entity_1.Product }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 202, description: 'Devuelve un producto actualizado', type: product_entity_1.Product }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Patch)(':nombreproducto'),
    __param(0, (0, common_1.Param)('nombreproducto')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Objeto eliminado correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found' }),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':nombreproducto'),
    __param(0, (0, common_1.Param)('nombreproducto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "remove", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map