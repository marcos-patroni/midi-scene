import { Controller, Get, Param } from '@nestjs/common';
import { MidiinputService } from './midiinput.service';

@Controller('midiinput')
export class MidiinputController {
  constructor(private readonly midiInputService: MidiinputService) {}
  @Get()
  async getHello() {
    return await this.midiInputService.getInputs();
  }
  @Get(':id')
  async inicia(@Param('id') id) {
    await this.midiInputService.iniciaListen(id);
  }
}
