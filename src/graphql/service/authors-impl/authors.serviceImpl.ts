import { Injectable } from '@nestjs/common';
import { AuthorsService } from '../authors.service';
import { CreateAuthorInput } from '../../dto/input/create-author.input';
import { Author } from '../../models/author.model';
import { GetAuthorsArgs } from '../../dto/args/get-authors.args';
import { GetAuthorArgs } from '../../dto/args/get-author.args';
import { UpdateAuthorInput } from '../../dto/input/update-author.input';
import { DeleteAuthorInput } from '../../dto/input/delete-author.input';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class AuthorsServiceImpl implements AuthorsService{
  get pubSub(): PubSub {
    return this._pubSub;
  }
  private _pubSub: PubSub = new PubSub();

  get authors(): Author[] {
    return this._authors;
  }

  private _authors: Author[] = [
    {id: '1', name: '鲁迅', posts: [], createdTime: new Date()},
    {id: '2', name: '王小波', posts: [], createdTime: new Date()},
    {id: '3', name: '刘慈欣', posts: [], createdTime: new Date()},
  ];

  private _lastID: number;

  constructor() {
    this._lastID = this.authors.length;
  }

  /**
   * 创建一名作者
   * @param createAuthorInput
   */
  createAuthor(createAuthorInput: CreateAuthorInput): Author {
    const author: Author = {
      ...createAuthorInput,
      id: `${++this._lastID }`,
      createdTime: new Date(),
      posts: []
    }
    this._authors.push(author)
    this.pubSub.publish('authors', { authors: this.authors }).then()

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

  /**
   * 更新作家
   * @param updateAuthorInput
   */
  updateAuthor(updateAuthorInput: UpdateAuthorInput): Author {
    const author = this.authors.find(author => author.id === updateAuthorInput.id)
    Object.assign(author, updateAuthorInput)
    this.pubSub.publish('authors', { authors: this.authors }).then()

    return author
  }

  /**
   * 删除作家
   * @param deleteAuthorInput
   */
  deleteAuthor(deleteAuthorInput: DeleteAuthorInput): Author {
    const index = this.authors.findIndex(author => author.id === deleteAuthorInput.id)
    const author = this.authors[index]
    this.authors.splice(index, 1)
    this.pubSub.publish('authors', { authors: this.authors }).then()

    return author;
  }
}
