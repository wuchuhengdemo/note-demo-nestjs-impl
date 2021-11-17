import { Injectable } from '@nestjs/common';
import { NovelsService } from '../novels.service';
import { Novel } from '../../models/novel.model';
import { CreateNovelInput } from '../../dto/input/create-novel.input';
import { Chapter } from '../../models/chapter.model';
import { GetNovelsArgs } from '../../dto/args/get-novels.args';
import { Field, ID } from '@nestjs/graphql';

@Injectable()
export class NovelImplService implements NovelsService{
  private lastId: number = 0;

  get novels(): Novel[] {
    return this._novels;
  }
  private _novels: Novel[] = [ ];

  constructor() {
    this.novels.push(new Novel({
      uid: '1',
      title: '狂人日记',
      chapters: [{id: '1', title: '狂人日记', content: '虚!!！，别出声，他们在吃人...'}],
      id: `${++this.lastId}`,
    }))
    this.novels.push(new Novel({
      uid: '1',
      title: '阿Q正传',
      chapters: [{id: '1', title: '阿Q正传', content: '永远是胜利家...'}],
      id: `${++this.lastId}`,
    }))
    this.novels.push(new Novel({
      uid: '2',
      title: '特立独行的猪',
      chapters: [{id: '1', title: '特立独行的猪', content: '有只特立独行的猪...'}],
      id: `${++this.lastId}`,
    }))
    this.novels.push(new Novel({
      uid: '3',
      title: '赡养人类',
      chapters: [{id: '1', title: '赡养人类', content: '快快快，赶紧把我的钱都分给穷人...'}],
      id: `${++this.lastId}`,
    }))
  }

  createNovel(createNovelInput: CreateNovelInput): Novel {
    ++this.lastId;
    const chapters: Chapter[] = createNovelInput.chapters.map((chapter, index): Chapter => {
      return {
        id: `${index + 1}`,
        ...chapter
      };
    })
    const novel: Novel = {
      ...createNovelInput,
      id: `${this.lastId}`,
      updatedTime: new Date(),
      chapters,
      get lastChapter(): string {
        return chapters.length > 0 ? chapters[chapters.length -1 ].title : "";
      },
    }
    this.novels.push(novel)

   return novel;
  }

  getNovels(getNovelsArgs: GetNovelsArgs): Novel[] {
    return this.novels.filter(novel => getNovelsArgs.ids.includes(novel.uid))
  }
}
