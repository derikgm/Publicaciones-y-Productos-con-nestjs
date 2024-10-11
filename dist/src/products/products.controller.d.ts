import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        ok: boolean;
        message: string;
        product: CreateProductDto;
    }>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(nombreproducto: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(nombreproducto: string): Promise<{
        ok: boolean;
        message: string;
    }>;
}
