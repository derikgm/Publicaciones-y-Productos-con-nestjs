import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Product {

    @ApiProperty({
        example: 'cd512312-b2h3-ka92-bjk4hlm1o2i3',
        description: 'Id del producto',
        uniqueItems: true
    })
    @PrimaryColumn('uuid')
    id:string;
    
    @ApiProperty({
        example: 'Tubo de pasta',
        description: 'nombre del producto'
    })
    @Column('text')
    nombreProducto: string;
    
    @ApiProperty({
        example: 'Salud',
        description: 'categoria del producto'
    })
    @Column('text')
    categoria: string;
}
