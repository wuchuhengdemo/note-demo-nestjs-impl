import { Field, ID, InputType } from '@nestjs/graphql';
import { Validate } from 'class-validator';
import { IsAuthorAlreadyExists } from '../../validators/is-author-already-exists';

@InputType()
export class DeleteAuthorInput {
  @Field(type => ID)
  @Validate(IsAuthorAlreadyExists)
  id: string
}