import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty({
        description:'nombre del producto',
        example:'Tubo de pasta'
    })
    @IsString()
    nombreProducto: string;

    @ApiProperty({
        description:'Categoria del producto',
        example:'Salud'
    })
    @IsString()
    categoria: string;
}
