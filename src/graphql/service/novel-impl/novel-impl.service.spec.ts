import { Test, TestingModule } from '@nestjs/testing';
import { NovelImplService } from './novel-impl.service';

describe('NovelImplService', () => {
  let service: NovelImplService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NovelImplService],
    }).compile();

    service = module.get<NovelImplService>(NovelImplService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
