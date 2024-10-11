import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MinLength, } from "class-validator";


export class CreateUsuarioDto {

    @ApiProperty({
        example: 'miguel23',
        description: 'el nombre de usuario',
        uniqueItems: true
    })
    @IsString()
    @MinLength(4)
    nombreUsuario: string;

    @ApiProperty({
        example: 'mig3lP3r3s',
        description: 'password del usuario'
    })
    @IsString()
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'La contraseña necesita mayusculas, minusculas, y numeros'
        }
    )
    @MinLength(5)
    password: string;

    @ApiProperty({
        example: 'Administrador',
        description: 'rol del usuario'
    })
    @IsString()
    rol: string;
}
