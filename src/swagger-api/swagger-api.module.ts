import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { GraphqlModule } from '../graphql/graphql.module';
import { AuthorsController } from './authors/authors.controller';

@Module({
  controllers: [PostsController, AuthorsController],
  imports: [
    GraphqlModule
  ]
})
export class SwaggerApiModule {}
