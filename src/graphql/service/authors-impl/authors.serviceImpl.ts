import { Injectable } from '@nestjs/common';
import { AuthorsService } from '../authors.service';
import { CreateAuthorInput } from '../../dto/input/create-author.input';
import { Author } from '../../models/author.model';
import { GetAuthorsArgs } from '../../dto/args/get-authors.args';
import { GetAuthorArgs } from '../../dto/args/get-author.args';
import { Field, ID } from '@nestjs/graphql';
import { Post } from '../../models/post.model';

@Injectable()
export class AuthorsServiceImpl implements AuthorsService{
  get authors(): Author[] {
    return this._authors;
  }
  private lastID: number = 0;

  private _authors: Author[] = [
    {id: '1', name: '鲁迅', posts: [], createdTime: new Date()},
    {id: '2', name: '王小波', posts: [], createdTime: new Date()},
    {id: '3', name: '刘慈欣', posts: [], createdTime: new Date()},
  ];

  /**
   * 创建一名作者
   * @param createAuthorInput
   */
  createAuthor(createAuthorInput: CreateAuthorInput): Author {
    const author: Author = {
      ...createAuthorInput,
      id: `${++this.lastID }`,
      createdTime: new Date(),
      posts: []
    }
    this._authors.push(author)

    return author
  }

  /**
   * 获取作者数列
   * @param getAuthorsArgs
   */
  getAuthors(getAuthorsArgs: GetAuthorsArgs): Author[] {
    if (!getAuthorsArgs.ids) {
      return this._authors;
    } else {
      return this._authors.filter(author => getAuthorsArgs.ids.includes(author.id))
    }
  }

  /**
   * 获取一名作者
   * @param getAuthorArgs
   */
  getAuthor(getAuthorArgs: GetAuthorArgs): Author {
    return this.authors.find(author => author.id === getAuthorArgs.id)
  }
}
