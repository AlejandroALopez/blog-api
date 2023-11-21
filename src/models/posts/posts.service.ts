import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
// import { Post } from './interfaces/posts.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(post: Post): Promise<Post> {
    const createdPost = new this.postModel(post);
    return createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find({}, 'title date author tag description').exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, post: Post): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, post, { new: true }).exec();
  }

  async remove(id: string): Promise<Post> {
    return this.postModel.findByIdAndRemove(id).exec();
  }
}
