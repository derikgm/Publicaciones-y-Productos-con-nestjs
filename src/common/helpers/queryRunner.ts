import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { tratoBDExcepciones } from "./tratado-excepciones";

@Injectable()
export class QueryRunner {
    
    constructor(
        private readonly dataSource: DataSource
    ){}

    async ejecutar(entidades: any[], callback?: Function ){
        const queryRunner = this.dataSource.createQueryRunner();

        try {
            await queryRunner.connect();
            await queryRunner.startTransaction();    
            
            for (const entidad of entidades) {
                await queryRunner.manager.save(entidad);
            }
            
            if(callback) await callback();

            await queryRunner.commitTransaction();

        } catch (error) {
            await queryRunner.rollbackTransaction();
            tratoBDExcepciones(error, 'distribuciones');
        }finally{
            await queryRunner.release();
        }
    }
}
