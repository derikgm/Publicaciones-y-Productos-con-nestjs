import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { tratoBDExcepciones } from 'src/common/helpers/tratado-excepciones';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
 
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ){}
  
  async crearProduct(createProductDto: CreateProductDto){
    try {
      const product = this.productRepository.create(createProductDto)

      await this.productRepository.insert(product);

      return {ok:true, message: 'producto creado', product: createProductDto}
    } catch (error) {
      tratoBDExcepciones(error, 'Product')
    }
  }

  async obtenerTodos(){
    return await this.productRepository.find();
  }

  async obtenerProducto(id: string){
    return await this.obtenerProduct(id)
  }

  async actualizarProducto( id: string, updateProductDto: UpdateProductDto){
    const producto = await this.obtenerProduct(id);

    producto.categoria = updateProductDto.categoria;
    producto.nombreProducto = updateProductDto.nombreProducto;

    return await this.productRepository.save(producto)
  }

  async eliminarProduct(nombreProduct: string){

    const product: Product = await this.obtenerProduct(nombreProduct);

    try {
      await this.productRepository.delete(product);
      return {ok: true, message: 'Product eliminado'}
    } catch (error) {
      tratoBDExcepciones(error, 'Product');
    }
  }


/// FUNCIONES DE AYUDA ////

  async obtenerProduct(id: string): Promise<Product>{

    const product = await this.productRepository.findOne({
      where: {id},
    })

    if(!product)
      throw new NotFoundException(`Ese product no existe`);

    return product;

  }

}
