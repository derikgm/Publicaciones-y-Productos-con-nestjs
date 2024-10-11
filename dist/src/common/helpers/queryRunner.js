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
exports.QueryRunner = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const tratado_excepciones_1 = require("./tratado-excepciones");
let QueryRunner = class QueryRunner {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async ejecutar(entidades, callback) {
        const queryRunner = this.dataSource.createQueryRunner();
        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();
            for (const entidad of entidades) {
                await queryRunner.manager.save(entidad);
            }
            if (callback)
                await callback();
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            (0, tratado_excepciones_1.tratoBDExcepciones)(error, 'distribuciones');
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.QueryRunner = QueryRunner;
exports.QueryRunner = QueryRunner = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], QueryRunner);
//# sourceMappingURL=queryRunner.js.map