import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Product } from './entities/product.entity';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({status: 201, description: 'El producto ha sido creado', type: Product})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 403, description: 'Token invalido'})
  @Post()
  @Auth()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.crearProduct(createProductDto);
  }

  @ApiResponse({status: 200, description: 'cuantos productos hay', type: Product[10]})
  @ApiResponse({status: 400, description: 'Bad request'})
  @Get()
  findAll() {
    return this.productsService.obtenerTodos();
  }

  @ApiResponse({status: 200, description: 'Devuelve un producto en general', type: Product})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.obtenerProducto(id);
  }

  @ApiResponse({status: 202, description: 'Devuelve un producto actualizado', type: Product})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Auth()
  @Patch(':nombreproducto')
  update(@Param('nombreproducto') nombreproducto: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.actualizarProducto(nombreproducto, updateProductDto);
  }

  @ApiResponse({status: 200, description: 'Objeto eliminado correctamente'})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Auth()
  @Delete(':nombreproducto')
  remove(@Param('nombreproducto') nombreproducto: string) {
    return this.productsService.eliminarProduct(nombreproducto);
  }
}
