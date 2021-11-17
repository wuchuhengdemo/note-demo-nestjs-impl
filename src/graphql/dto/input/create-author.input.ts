import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateAuthorInput {
  @Field({description: '作者名'})
  @ApiProperty({description: '作者名'})
  @IsNotEmpty()
  name: string;
}