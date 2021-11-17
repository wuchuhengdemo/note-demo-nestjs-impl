import { Controller, Get } from '@nestjs/common';
import { Novel } from '../../graphql/models/novel.model';
import { NovelImplService} from '../../graphql/service/novel-impl/novel-impl.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('novels')
export class NovelsController {
  constructor(private readonly novelsImplService: NovelImplService) {
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: '获取全部书',
    type: [Novel],
  })
  getNovels(): Novel[] {
    return this.novelsImplService.novels
  }
}
