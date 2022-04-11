import { Injectable } from '@nestjs/common';
import * as sqlite from 'sqlite3';

@Injectable()
export class GlobalService {
  static connectDb(): sqlite.Database {
    const sqlite3 = sqlite.verbose();
    const db = new sqlite3.Database('teste');
    db.configure('busyTimeout', 1000);
    return db;
  }
}
