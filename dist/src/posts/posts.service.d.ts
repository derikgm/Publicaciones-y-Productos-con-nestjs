import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Post>);
    crearPost(createPostDto: CreatePostDto): Promise<{
        ok: boolean;
        message: string;
        post: CreatePostDto;
    }>;
    obtenerTodos(): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
    actualizarPost(id: string, updatePostDto: UpdatePostDto): Promise<Post>;
    eliminarPost(nombrePost: string): Promise<{
        ok: boolean;
        message: string;
    }>;
    obtenerPost(id: string): Promise<Post>;
}
