import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Content {
  // for blog content, either text, images, code snippets, or text in colored boxes

  @Prop({ required: true, enum: ['paragraph', 'image', 'code', 'coloredBox'] })
  type: string;

  @Prop({
    required: function () {
      return this.type !== 'image';
    },
  })
  data?: string;

  @Prop({
    required: function () {
      return this.type === 'image';
    },
  })
  imageId?: string;
}

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  tag: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [Content], required: true })
  content: Content[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
