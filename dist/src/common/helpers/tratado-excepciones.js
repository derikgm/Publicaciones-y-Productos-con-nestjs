"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tratoBDExcepciones = tratoBDExcepciones;
const common_1 = require("@nestjs/common");
function tratoBDExcepciones(error, entidad) {
    console.log(error);
    if (error.code == 23505)
        throw new common_1.BadRequestException(`${entidad} existente`);
    if (error.code == 23503)
        throw new common_1.BadRequestException(`${entidad} existente`);
    if (error.statusCode = 404)
        throw new common_1.NotFoundException(error.message);
    this.logger.error(error);
    this.logger.error('Error ocurrido en: ' + entidad);
    throw new common_1.InternalServerErrorException('Algo sucedio en el servidor');
}
//# sourceMappingURL=tratado-excepciones.js.map