import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { tratoBDExcepciones } from 'src/common/helpers/tratado-excepciones';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
 
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ){}
  
  async crearPost(createPostDto: CreatePostDto){
    try {
      const post = this.postRepository.create(createPostDto)

      await this.postRepository.insert(post);

      return {ok:true, message: 'post creado', post: createPostDto}
    } catch (error) {
      tratoBDExcepciones(error, 'Post')
    }
  }

  async obtenerTodos(){
    return await this.postRepository.find();
  }

  async getPost(id: string){
    return await this.obtenerPost(id)
  }

  async actualizarPost( id: string, updatePostDto: UpdatePostDto){
    const post = await this.obtenerPost(id);

    // post.categoria = updatePostDto.categoria;
    // post.nombrePost = updatePostDto.nombrePost;

    //TODO: ver como se hacia esto
    // ...post = ...updatePostDto;

    return await this.postRepository.save(post)
  }

  async eliminarPost(nombrePost: string){

    const post: Post = await this.obtenerPost(nombrePost);

    try {
      await this.postRepository.delete(post);
      return {ok: true, message: 'Post eliminado'}
    } catch (error) {
      tratoBDExcepciones(error, 'Post');
    }
  }


/// FUNCIONES DE AYUDA ////

  async obtenerPost(id: string): Promise<Post>{

    const post = await this.postRepository.findOne({
      where: {id},
    })

    if(!post)
      throw new NotFoundException(`Ese post no existe`);

    return post;

  }

}
