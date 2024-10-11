import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    crearProduct(createProductDto: CreateProductDto): Promise<{
        ok: boolean;
        message: string;
        product: CreateProductDto;
    }>;
    obtenerTodos(): Promise<Product[]>;
    obtenerProducto(id: string): Promise<Product>;
    actualizarProducto(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    eliminarProduct(nombreProduct: string): Promise<{
        ok: boolean;
        message: string;
    }>;
    obtenerProduct(id: string): Promise<Product>;
}
