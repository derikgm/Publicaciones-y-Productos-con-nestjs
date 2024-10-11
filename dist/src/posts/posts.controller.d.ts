import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<{
        ok: boolean;
        message: string;
        post: CreatePostDto;
    }>;
    findAll(): Promise<import("./entities/post.entity").Post[]>;
    findOne(id: string): Promise<import("./entities/post.entity").Post>;
    update(nombrepost: string, updatePostDto: UpdatePostDto): Promise<import("./entities/post.entity").Post>;
    remove(nombrepost: string): Promise<{
        ok: boolean;
        message: string;
    }>;
}
