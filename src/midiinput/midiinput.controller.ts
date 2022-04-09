import { Controller, Get, Param } from '@nestjs/common';
import { MidiinputService } from './midiinput.service';

@Controller('midiinput')
export class MidiinputController {
  constructor(private readonly midiService: MidiinputService) {}
  @Get()
  async getHello() {
    return await this.midiService.getInputs();
  }
  @Get(':id')
  async inicia(@Param('id') id) {
    await this.midiService.iniciaListen(id);
  }
}
