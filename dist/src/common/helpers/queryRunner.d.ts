import { DataSource } from "typeorm";
export declare class QueryRunner {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    ejecutar(entidades: any[], callback?: Function): Promise<void>;
}
