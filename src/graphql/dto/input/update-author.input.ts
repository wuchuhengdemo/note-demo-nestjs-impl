import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Validate } from 'class-validator';
import { IsAuthorAlreadyExists } from '../../validators/is-author-already-exists';

@InputType()
export class UpdateAuthorInput {
  @Field(type => ID)
  @Validate(IsAuthorAlreadyExists)
  @ApiProperty()
  id: string;

  @Field()
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}