import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from 'src/core/logger.service';
import compression from 'compression';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {});
    // retrieve Logger definition from App Module imports
    app.useLogger(app.get(Logger));
    app.setGlobalPrefix('/ats/v1');
    app.use(compression());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
