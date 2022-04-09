import { Injectable } from '@nestjs/common';
import * as JZZ from 'jzz';

@Injectable()
export class MidioutputService {
  async getOutputs(): Promise<string[]> {
    const access = await JZZ.requestMIDIAccess();
    const outMidi = access.outputs;
    let conta: number;
    const retorno: string[] = [];
    conta = 0;
    outMidi.forEach((element) => {
      retorno[conta] = element.name;
      conta++;
    });
    return retorno;
  }
}
