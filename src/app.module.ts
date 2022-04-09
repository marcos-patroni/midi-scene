import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MidiinputController } from './midiinput/midiinput.controller';
import { MidiinputService } from './midiinput/midiinput.service';

@Module({
  imports: [],
  controllers: [AppController, MidiinputController],
  providers: [AppService, MidiinputService],
})
export class AppModule {}
