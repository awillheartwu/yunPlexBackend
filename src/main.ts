import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: 'http://127.0.0.1:5173',
        // origin: 'http://172.22.11.55:5173',
        credentials: true,
    });
    await app.listen(process.env.NEST_PORT || 3000);
}
bootstrap();
