import { PostsResolver } from './posts.resolver';
import { CreatePostInput } from '../dto/input/create-post.input';
import { Post } from '../models/post.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsImplService } from '../service/posts-impl/posts-impl.service';
import { GetPostsArgs } from '../dto/args/get-posts.args';

@Resolver(type => Post)
export class PostsResolverImpl implements PostsResolver {
  constructor(private postsImplService: PostsImplService) { }

  @Mutation(type => Post, {description: '添加一本书'})
  createPosts(@Args('createPostInput') createPostInput: CreatePostInput): Post {
    return this.postsImplService.createPosts(createPostInput)
  }

  @Query(
    type => [Post],
    {nullable: 'items',
      name: 'posts',
      description: '获取书的数列'
    })
  getPosts(@Args() getPostsArgs: GetPostsArgs): Post[] {
    return this.postsImplService.getPosts(getPostsArgs)
  }
}