import { BadRequestException, InternalServerErrorException, NotFoundException } from "@nestjs/common";

export function tratoBDExcepciones(error: any, entidad: string){
    console.log(error);
    

    if(error.code == 23505)
      throw new BadRequestException(`${entidad} existente`);

    if(error.code == 23503)   
      throw new BadRequestException(`${entidad} existente`);

    if( error.statusCode = 404)
      throw new NotFoundException(error.message);

    this.logger.error(error);
    this.logger.error('Error ocurrido en: '+ entidad);
    // console.log(error);   
    
    throw new InternalServerErrorException('Algo sucedio en el servidor');
  }