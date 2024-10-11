import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {

     @ApiProperty({
        example: 'Venta de tubos de pasta',
        description: 'nombre del producto'
    })
    @IsString()
    nombre: string;

    @ApiProperty({
        example: 'Salud dental',
        description: 'categoria del producto'
    })
    @IsString()
    tema: string
}
