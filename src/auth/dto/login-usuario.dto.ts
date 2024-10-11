import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MinLength } from "class-validator";


export class LoginUsuarioDto {

    @ApiProperty({
        example: 'miguel23',
        description: 'el nombre de usuario',
        uniqueItems: true
    })
    @IsString({message: 'Valor inadmisible'})
    @MinLength(4,{
        message: 'El nombre de usuario debe de tener 4 caracteres o más'
    })
    nombreUsuario: string;

    @ApiProperty({
        example: 'mig3lP3r3s',
        description: 'password del usuario'
    })
    @IsString({message: 'Valor inadmisible'})
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'La contraseña necesita mayusculas, minusculas, y numeros'
        }
    )
    @MinLength(5,{
        message: 'La contraseña debe de tener 5 caracteres o más'
    })
    password: string;

}