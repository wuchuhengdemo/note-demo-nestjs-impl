import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Chapter {
  @Field(type => ID, {description: '章节id'})
  @ApiProperty()
  id: string;

  @Field({description: '章节标题'})
  @ApiProperty()
  title: string;

  @Field({description: '章节内容'})
  @ApiProperty()
  content: string;
}