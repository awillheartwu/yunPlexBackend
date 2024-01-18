import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YpsettingController } from './ypsetting/ypsetting.controller';
import { YpsettingService } from './ypsetting/ypsetting.service';

@Module({
    imports: [],
    controllers: [AppController, YpsettingController],
    providers: [AppService, YpsettingService],
})
export class AppModule {}
