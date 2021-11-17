import { CreateChapterInput } from '../dto/input/create-chapter.input';
import { Post } from '../models/post.model';
import { CreatePostInput } from '../dto/input/create-post.input';
import { GetPostsArgs } from '../dto/args/get-posts.args';

export interface PostsService {
  /**
   * 创建一本小说
   * @param createPostInput
   */
  createPosts(createPostInput: CreatePostInput): Post;

  /**
   * 获取书的数列
   * @param getPostsArgs
   */
  getPosts(getPostsArgs: GetPostsArgs): Post[];
}