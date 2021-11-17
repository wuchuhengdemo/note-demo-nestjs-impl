import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Novel } from './novel.model';

@ObjectType()
export class Author {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => [Novel], {nullable: 'items', description: '作者名下的小说'})
  novels: Novel[]

  @Field({description: '创建时间'})
  createdTime: Date
}