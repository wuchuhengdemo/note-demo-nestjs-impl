import { NovelsResolver } from './novels.resolver';
import { CreateNovelInput } from '../dto/input/create-novel.input';
import { Novel } from '../models/novel.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NovelImplService } from '../service/novel-impl/novel-impl.service';
import { GetNovelsArgs } from '../dto/args/get-novels.args';

@Resolver(type => Novel)
export class NovelsResolverImpl implements NovelsResolver {
  constructor(private novelsImplService: NovelImplService) { }

  @Mutation(type => Novel, {description: '添加一本书'})
  createNovel(@Args('createNovelInput') createNovelInput: CreateNovelInput): Novel {
    return this.novelsImplService.createNovel(createNovelInput)
  }

  @Query(
    type => [Novel],
    {nullable: 'items',
      name: 'novels',
      description: '获取书的数列'
    })
  getNovels(@Args() getNovelsArgs: GetNovelsArgs): Novel[] {
    return this.novelsImplService.getNovels(getNovelsArgs)
  }
}