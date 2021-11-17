import { Module } from '@nestjs/common';
import { PostsImplService } from './service/posts-impl/posts-impl.service';
import { AuthorsServiceImpl } from './service/authors-impl/authors.serviceImpl';
import { AuthorsResolverImpl } from './resolvers/authors.resolverImpl';
import { PostsResolverImpl } from './resolvers/posts.resolverImpl';
import { IsAuthorAlreadyExists} from './validators/is-author-already-exists';

@Module({
  providers: [
    PostsImplService,
    AuthorsServiceImpl,
    AuthorsResolverImpl,
    PostsResolverImpl,
    IsAuthorAlreadyExists,
  ],
  exports: [
    PostsImplService,
    AuthorsServiceImpl,
  ]
})
export class GraphqlModule {}
