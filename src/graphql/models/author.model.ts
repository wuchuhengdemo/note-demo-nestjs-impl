import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
export class Author {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [Post], {nullable: 'items', description: '作者名下的小说'})
  posts: Post[]

  @Field({description: '创建时间'})
  createdTime: Date
}