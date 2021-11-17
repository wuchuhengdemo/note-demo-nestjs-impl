import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, Validate } from 'class-validator';
import { CreateChapterInput } from './create-chapter.input';
import { IsAuthorAlreadyExists } from '../../validators/is-author-already-exists';

@InputType()
export class CreatePostInput {
  @Field({description: '小说名'})
  @IsNotEmpty()
  title: string;

  @Field(type => ID, {description: '作者id'})
  @IsNotEmpty()
  @Validate(IsAuthorAlreadyExists)
  uid: string;

  @Field(
    type => [CreateChapterInput],
    {description: '添加章节', nullable: 'items'}
  )
  chapters: CreateChapterInput[]
}

