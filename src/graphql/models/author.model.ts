import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Author {
  @Field(type => ID)
  @ApiProperty()
  id: string;

  @Field()
  @ApiProperty()
  name: string;

  @Field(type => [Post], {nullable: 'items', description: '作者名下的小说'})
  @ApiProperty()
  posts: Post[]

  @Field({description: '创建时间'})
  @ApiProperty()
  createdTime: Date
}