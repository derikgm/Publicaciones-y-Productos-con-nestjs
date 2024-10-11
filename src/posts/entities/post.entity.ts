import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {

    @ApiProperty({
        example: 'cd512312-b2h3-ka92-bjk4hlm1o2i3',
        description: 'Id del producto',
        uniqueItems: true
    })
    @PrimaryColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'Venta de tubos de pasta',
        description: 'nombre del producto'
    })
    @Column('text')
    nombre: string;

    @ApiProperty({
        example: 'Salud dental',
        description: 'categoria del producto'
    })
    @Column('text')
    tema: string

}

