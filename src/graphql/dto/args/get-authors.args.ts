import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorsArgs {

  @Field(
    type => [ID],
    {nullable: 'itemsAndList', description: '作者id组'}
  )
  ids?: string[]
}