import { Module } from '@nestjs/common';
import { NovelsController } from './novels/novels.controller';
import { GraphqlModule } from '../graphql/graphql.module';
import { AuthorsController } from './authors/authors.controller';

@Module({
  controllers: [NovelsController, AuthorsController],
  imports: [
    GraphqlModule
  ]
})
export class SwaggerApiModule {}
