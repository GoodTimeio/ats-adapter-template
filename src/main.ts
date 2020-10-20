import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { RequestLoggerInterceptor } from '@api/interceptors/request-logger.interceptor';
import { Logger } from '@api/logger/logger';
import { setClsNameSpace } from '@api/services/cls.service';
import { createNamespace } from 'cls-hooked';
import { RequestRecorder } from '@api/middleware/request-recorder.middleware';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {});

    const namespace = createNamespace('goodtime');
    setClsNameSpace(namespace);

    //retrieve Logger definition from App Module imports
    app.useLogger(app.get(Logger));

    // Record request metadata for all routes
    app.use(RequestRecorder);

    // Write request metadata to log for all requests
    app.useGlobalInterceptors(new RequestLoggerInterceptor());

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
