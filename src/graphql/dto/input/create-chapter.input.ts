import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType({description: '添加章节'})
export class CreateChapterInput {
  @Field({description: '章节标题'})
  @IsNotEmpty()
  title: string;

  @Field({description: '章节内容'})
  @IsNotEmpty()
  content: string;
}