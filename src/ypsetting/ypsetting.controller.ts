import { Controller, Get } from '@nestjs/common';
import { YpsettingService } from './ypsetting.service';

@Controller('ypsetting')
export class YpsettingController {
    constructor(private readonly ypsettingService: YpsettingService) {}

    @Get()
    getypsetting(): string {
        return this.ypsettingService.getypsetting();
    }
}
