import {
  Controller,
  Param,
  Get,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './posts.service';
import { Post as PostModel } from './schemas/post.schema';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() post: PostModel): Promise<PostModel> {
    return this.postService.create(post);
  }

  @Get()
  async findAll(): Promise<PostModel[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel> {
    return this.postService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() post: PostModel): Promise<PostModel> {
    return this.postService.update(id, post);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<PostModel> {
    return this.postService.remove(id);
  }
}
