import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalService } from './global.service';
import * as sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();

async function bootstrap() {
  const db = new sqlite3.Database(':memory:');
  GlobalService.globalDb = db;
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
