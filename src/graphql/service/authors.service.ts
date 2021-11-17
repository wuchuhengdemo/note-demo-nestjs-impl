import { Author } from '../models/author.model';
import { CreateAuthorInput } from '../dto/input/create-author.input';
import { GetAuthorsArgs } from '../dto/args/get-authors.args';
import { GetAuthorArgs } from '../dto/args/get-author.args';

export interface AuthorsService {
  /**
   * 创建一名作者
   * @param createAuthorInput
   */
  createAuthor(createAuthorInput: CreateAuthorInput): Author;

  /**
   *  获取作者
   * @param getAuthorsArgs
   */
  getAuthors(getAuthorsArgs: GetAuthorsArgs): Author[];

  /**
   * 获取一名作者
   * @param getAuthorsArgs
   */
  getAuthor(getAuthorArgs: GetAuthorArgs): Author;
}