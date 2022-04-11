import { Injectable } from '@nestjs/common';
import { GlobalService } from './global.service';
import * as sqlite from 'sqlite3';

@Injectable()
export class DbService {
  private dados: any;

  async query() {
    const db: sqlite.Database = GlobalService.connectDb();
    await db.serialize(async () => {
      this.criaTabela(db);
      this.insereTabela(db);
      await this.selecionaTabela(db);
    });
    db.close();
    return this.dados;
  }
  private criaTabela(db: any) {
    db.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT, info2 char(2))');
  }
  private insereTabela(db: any) {
    const stmt = db.prepare('INSERT INTO lorem VALUES (?,?)');
    for (let i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i, 'a' + i);
    }
    stmt.finalize();
  }

  private async selecionaTabela(db: any) {
    db.all('SELECT rowid AS id, info, info2 FROM lorem', (err, row) => {
      this.dados = row;
    });
  }
}
