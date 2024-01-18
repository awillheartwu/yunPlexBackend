import { Test, TestingModule } from '@nestjs/testing';
import { YpsettingController } from './ypsetting.controller';

describe('YpsettingController', () => {
  let controller: YpsettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YpsettingController],
    }).compile();

    controller = module.get<YpsettingController>(YpsettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
