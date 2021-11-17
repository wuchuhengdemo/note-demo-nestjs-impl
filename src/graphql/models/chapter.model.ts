import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Chapter {
  @Field(type => ID, {description: '章节id'})
  id: string;

  @Field({description: '章节标题'})
  title: string;

  @Field({description: '章节内容'})
  content: string;
}