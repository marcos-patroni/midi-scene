import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MidiinputController } from './midiinput/midiinput.controller';
import { MidiinputService } from './midiinput/midiinput.service';
import { MidioutputController } from './midioutput/midioutput.controller';
import { MidioutputService } from './midioutput/midioutput.service';

@Module({
  imports: [],
  controllers: [AppController, MidiinputController, MidioutputController],
  providers: [AppService, MidiinputService, MidioutputService],
})
export class AppModule {}
