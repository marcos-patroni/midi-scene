import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  static globalVar: any;
  static globalDb: any;
}
