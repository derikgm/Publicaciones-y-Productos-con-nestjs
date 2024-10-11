import { ApiProperty } from "@nestjs/swagger";
import { IsString, Matches, MinLength } from "class-validator";

export class ActualizarPasswordDto {
    
    @ApiProperty({
        example: 'mig3lP3r3s',
        description: 'password antigua del usuario'
    })
    @IsString()
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'La contraseña necesita mayusculas, minusculas, y numeros'
        }
    )
    @MinLength(5)
    passwordAntigua: string;
    
    @ApiProperty({
        example: 'Mig4l9s1to',
        description: 'password nueva del usuario'
    })
    @IsString()
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'La contraseña necesita mayusculas, minusculas, y numeros'
        }
    )
    @MinLength(5)
    passwordNueva: string;

}
