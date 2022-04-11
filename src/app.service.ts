import { Injectable } from '@nestjs/common';
import { DbService } from './db.service';

@Injectable()
export class AppService {
  constructor(private readonly dbService: DbService) {}
  async inicializaDb() {
    return await this.dbService.query();
  }
}
