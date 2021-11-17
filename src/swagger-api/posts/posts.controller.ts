import { Controller, Get } from '@nestjs/common';
import { Post } from '../../graphql/models/post.model';
import { PostsImplService} from '../../graphql/service/posts-impl/posts-impl.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsImplService: PostsImplService) {
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: '获取全部书',
    type: [Post],
  })
  getPosts(): Post[] {
    return this.postsImplService.posts
  }
}
