import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAuthorInput {

  @Field({description: '作者名'})
  @IsNotEmpty()
  name: string;
}