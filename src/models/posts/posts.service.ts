import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/posts.interface';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  getPosts(): Post[] {
    return this.posts;
  }
}
