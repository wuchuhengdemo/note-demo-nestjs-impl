import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Chapter } from './chapter.model';

interface ConstructProps {
  uid: string;
  title: string;
  chapters: Chapter[];
  id: string;
}
@ObjectType()
export class Post {
  constructor({uid, title, id, chapters}: ConstructProps) {
    this.uid = uid;
    this.title = title;
    this.id = id;
    this.chapters = chapters;
    this.updatedTime = new Date();
  }

  uid: string;

  @Field(type => ID)
  id: string;

  @Field({description: '书名'})
  title: string;

  @Field(type => [Chapter], {description: '章节数列', nullable: 'items'})
  chapters: Chapter[];

  @Field({description: '最近更新时间'})
  updatedTime: Date;

  @Field({description: '最新一章'})
  get lastChapter(): string {
    if (this.chapters.length > 0) {
      return this.chapters[this.chapters.length - 1].title
    }
    return ""
  }
}