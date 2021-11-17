import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Chapter } from './chapter.model';
import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty()
  id: string;

  @Field({description: '书名'})
  @ApiProperty()
  title: string;

  @Field(type => [Chapter], {description: '章节数列', nullable: 'items'})
  @ApiProperty()
  chapters: Chapter[];

  @Field({description: '最近更新时间'})
  @ApiProperty()
  updatedTime: Date;

  @Field({description: '最新一章'})
  @ApiProperty()
  get lastChapter(): string {
    if (this.chapters.length > 0) {
      return this.chapters[this.chapters.length - 1].title
    }
    return ""
  }
}