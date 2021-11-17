import { Injectable } from '@nestjs/common';
import { PostsService } from '../posts.service';
import { Post } from '../../models/post.model';
import { CreatePostInput } from '../../dto/input/create-post.input';
import { Chapter } from '../../models/chapter.model';
import { GetPostsArgs } from '../../dto/args/get-posts.args';
import { Field, ID } from '@nestjs/graphql';

@Injectable()
export class PostsImplService implements PostsService{
  private lastId: number = 0;

  get posts(): Post[] {
    return this._posts;
  }
  private _posts: Post[] = [ ];

  constructor() {
    this.posts.push(new Post({
      uid: '1',
      title: '狂人日记',
      chapters: [{id: '1', title: '狂人日记', content: '虚!!！，别出声，他们在吃人...'}],
      id: `${++this.lastId}`,
    }))
    this.posts.push(new Post({
      uid: '1',
      title: '阿Q正传',
      chapters: [{id: '1', title: '阿Q正传', content: '永远是胜利家...'}],
      id: `${++this.lastId}`,
    }))
    this.posts.push(new Post({
      uid: '2',
      title: '特立独行的猪',
      chapters: [{id: '1', title: '特立独行的猪', content: '有只特立独行的猪...'}],
      id: `${++this.lastId}`,
    }))
    this.posts.push(new Post({
      uid: '3',
      title: '赡养人类',
      chapters: [{id: '1', title: '赡养人类', content: '快快快，赶紧把我的钱都分给穷人...'}],
      id: `${++this.lastId}`,
    }))
  }

  createPosts(createPostInput: CreatePostInput): Post {
    ++this.lastId;
    const chapters: Chapter[] = createPostInput.chapters.map((chapter, index): Chapter => {
      return {
        id: `${index + 1}`,
        ...chapter
      };
    })
    const post: Post = {
      ...createPostInput,
      id: `${this.lastId}`,
      updatedTime: new Date(),
      chapters,
      get lastChapter(): string {
        return chapters.length > 0 ? chapters[chapters.length -1 ].title : "";
      },
    }
    this.posts.push(post)

   return post;
  }

  getPosts(getPostsArgs: GetPostsArgs): Post[] {
    return getPostsArgs.ids?.length > 0 ?
      this.posts.filter(post => getPostsArgs.ids.includes(post.uid))
      : this.posts;
  }
}
