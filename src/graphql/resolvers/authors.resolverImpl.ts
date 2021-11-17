import { AuthorsResolver } from './authors.resolver';
import { CreateAuthorInput } from '../dto/input/create-author.input';
import { Author } from '../models/author.model';
import { GetAuthorsArgs } from '../dto/args/get-authors.args';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorsServiceImpl } from '../service/authors-impl/authors.serviceImpl';
import { GetAuthorArgs } from '../dto/args/get-author.args';
import { Novel } from '../models/novel.model';
import { NovelImplService} from '../service/novel-impl/novel-impl.service';

@Resolver(of => Author)
export class AuthorsResolverImpl implements AuthorsResolver{
  constructor(
    private readonly authorsServiceImpl: AuthorsServiceImpl,
    private readonly novelsImplService: NovelImplService
    ) { }

  @Query(type => [Author], {description: '获取作者数列', name: 'authors'})
  getAuthors(@Args() getAuthorsArgs: GetAuthorsArgs): Author[] {
    return this.authorsServiceImpl.getAuthors(getAuthorsArgs)
  }

  @Mutation(type => Author, {description: '创建一名作者'})
  createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput): Author {
    return this.authorsServiceImpl.createAuthor(createAuthorInput)
  }

  @Query(type => Author, {description: '获取一名作者', name: 'author'})
  getAuthor(@Args() getAuthorArgs: GetAuthorArgs): Author {
    return this.authorsServiceImpl.getAuthor(getAuthorArgs)
  }

  @ResolveField('novels', returns => [Novel])
  getNovels(@Parent() author: Author): Novel[] {
    return this.novelsImplService.getNovels({ids: [author.id]})
  }
}