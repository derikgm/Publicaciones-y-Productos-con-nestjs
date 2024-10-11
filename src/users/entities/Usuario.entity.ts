import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Usuario {

    @ApiProperty({
        example: 'miguel23',
        uniqueItems: true,
        description: 'nombre del usuario'
    })
    @PrimaryColumn('uuid')
    nombreUsuario: string;

    @ApiProperty({
        example: 'hru923iud89j201d92djx23h1r81ufhc1028rhfnc0812hn0821ihjf012j09m2d122ehc82uhj043',
        description: 'password del usuario'
    })
    @Column('text')
    password: string;

    @ApiProperty({
        example: 'Administrador',
        description: 'rol del usuario',
        default: 'comun'
    })
    @Column('text',{ default: 'comun' })
    rol: string;

}