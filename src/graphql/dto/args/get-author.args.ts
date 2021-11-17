import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsAuthorAlreadyExists } from '../../validators/is-author-already-exists';

@ArgsType()
export class GetAuthorArgs {
 @Field(type => ID, {description: '作者id'})
 @IsNotEmpty()
 @Validate(IsAuthorAlreadyExists)
 id: string;
}