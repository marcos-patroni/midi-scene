import { Injectable } from '@nestjs/common';
import * as JZZ from 'jzz';

@Injectable()
export class MidiinputService {
  midi: any = {};
  inputs: any = {};

  async getInputs(): Promise<string[]> {
    const access = await JZZ.requestMIDIAccess();
    const inMidi = access.inputs;
    let conta: number;
    const retorno: string[] = [];
    conta = 0;
    inMidi.forEach((element) => {
      retorno[conta] = element.name;
      conta++;
    });
    return retorno;
  }
  async iniciaListen(port: string) {
    const access = await JZZ.requestMIDIAccess();
    const inMidi = access.inputs;
    inMidi.forEach((mi) => {
      if (port === mi.name) {
        mi.onmidimessage = this.onMidiIn;
      }
    });
  }
  async onMidiIn(ev) {
    console.log('MIDI:', ev.data);
  }
}
