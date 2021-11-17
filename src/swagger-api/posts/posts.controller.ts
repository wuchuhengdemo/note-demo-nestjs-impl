import { Controller, Get, Param } from '@nestjs/common';
import { Post } from '../../graphql/models/post.model';
import { PostsImplService} from '../../graphql/service/posts-impl/posts-impl.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsImplService: PostsImplService) {
  }

  @Get('/')
  @ApiOperation({summary: '获取全部文章'})
  @ApiResponse({
    status: 200,
    type: [Post],
  })
  getPosts(): Post[] {
    return this.postsImplService.posts
  }
}
