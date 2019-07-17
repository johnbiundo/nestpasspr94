import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as session from 'express-session';
import { ConfigService } from './shared/config/config.service';

import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<ConfigService>(ConfigService);

  // use express sessions
  app.use(
    session({
      secret: configService.get('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
      name: 'id',
      cookie: {
        sameSite: true,
        httpOnly: true,
        maxAge: 60000,
      },
    }),
  );

  // initialize express sessions, and have Passport use them
  app.use(passport.initialize());
  app.use(passport.session());

  const port = configService.get<number>('PORT');
  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
