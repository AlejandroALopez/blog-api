import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
// import { Post } from './interfaces/posts.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  private readonly posts: Post[] = [];

  async getPosts(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
}
