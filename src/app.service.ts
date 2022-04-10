import { Injectable } from '@nestjs/common';
//import { GlobalService } from './global.service';

@Injectable()
export class AppService {
  inicializaDb(): string {
    //this.teste();
    return 'Hello World!';
  }

  /*
  teste() {
    const db = GlobalService.globalDb;
    db.configure('busyTimeout', 1000);

    db.serialize(() => {
      db.run('CREATE TABLE lorem (info TEXT, info2 char(2))');
      const stmt = db.prepare('INSERT INTO lorem VALUES (?,?)');
      for (let i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i, 'a' + i);
      }
      stmt.finalize();
      db.each('SELECT rowid AS id, info, info2 FROM lorem', (err, row) => {
        console.log(`${row.id}: ${row.info}  ${row.info2}`);
      });
    });
    db.close();
  }*/
}
