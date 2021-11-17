import { Module } from '@nestjs/common';
import { NovelImplService } from './service/novel-impl/novel-impl.service';
import { AuthorsServiceImpl } from './service/authors-impl/authors.serviceImpl';
import { AuthorsResolverImpl } from './resolvers/authors.resolverImpl';
import { NovelsResolverImpl } from './resolvers/novels.resolverImpl';
import { IsAuthorAlreadyExists} from './validators/is-author-already-exists';

@Module({
  providers: [
    NovelImplService,
    AuthorsServiceImpl,
    AuthorsResolverImpl,
    NovelsResolverImpl,
    IsAuthorAlreadyExists,
  ]
})
export class GraphqlModule {}
