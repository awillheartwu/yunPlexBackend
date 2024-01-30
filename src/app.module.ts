import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config/configuration';
import { YpsettingController } from './ypsetting/ypsetting.controller';
import { YpsettingService } from './ypsetting/ypsetting.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config],
            isGlobal: true,
        }),
    ],
    controllers: [AppController, YpsettingController],
    providers: [AppService, YpsettingService],
})
export class AppModule {}
