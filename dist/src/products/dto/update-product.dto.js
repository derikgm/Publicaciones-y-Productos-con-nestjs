"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const create_product_dto_1 = require("./create-product.dto");
const dist_1 = require("@nestjs/swagger/dist");
class UpdateProductDto extends (0, dist_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map