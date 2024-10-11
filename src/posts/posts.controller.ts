import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiResponse({status: 201, description: 'El post ha sido creado', type: Post})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 403, description: 'Token invalido'})
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.crearPost(createPostDto);
  }

  @ApiResponse({status: 200, description: 'cuantos post hay', type: Post[10]})
  @ApiResponse({status: 400, description: 'Bad request'})
  @Get()
  findAll() {
    return this.postsService.obtenerTodos();
  }

  @ApiResponse({status: 200, description: 'Devuelve un post en general', type: Post})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.getPost(id);
  }

  @ApiResponse({status: 202, description: 'Devuelve un post actualizado', type: Post})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Patch(':nombrepost')
  update(@Param('nombrepost') nombrepost: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.actualizarPost(nombrepost, updatePostDto);
  }

  @ApiResponse({status: 200, description: 'Objeto eliminado correctamente'})
  @ApiResponse({status: 400, description: 'Bad request'})
  @ApiResponse({status: 404, description: 'Not found'})
  @Delete(':nombrepost')
  remove(@Param('nombrepost') nombrepost: string) {
    return this.postsService.eliminarPost(nombrepost);
  }
}
