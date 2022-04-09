import { Controller, Get } from '@nestjs/common';
import { MidioutputService } from './midioutput.service';

@Controller('midioutput')
export class MidioutputController {
  constructor(private readonly midiOutputService: MidioutputService) {}
  @Get()
  async getHello() {
    return await this.midiOutputService.getOutputs();
  }
}
