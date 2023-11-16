import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './interfaces/posts.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts(): Promise<Post[]> {
    return this.postsService.getPosts();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<string> {
    return `This action returns a #${id} post`;
  }
}
