import { Test, TestingModule } from '@nestjs/testing';
import { YpsettingService } from './ypsetting.service';

describe('YpsettingService', () => {
  let service: YpsettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YpsettingService],
    }).compile();

    service = module.get<YpsettingService>(YpsettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
