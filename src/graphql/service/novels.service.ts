import { CreateChapterInput } from '../dto/input/create-chapter.input';
import { Novel } from '../models/novel.model';
import { CreateNovelInput } from '../dto/input/create-novel.input';
import { GetNovelsArgs } from '../dto/args/get-novels.args';

export interface NovelsService {
  /**
   * 创建一本小说
   * @param createNovelInput
   */
  createNovel(createNovelInput: CreateNovelInput): Novel;

  /**
   * 获取书的数列
   * @param getNovelsArgs
   */
  getNovels(getNovelsArgs: GetNovelsArgs): Novel[];
}