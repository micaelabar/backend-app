import { Module } from '@nestjs/common';
import { ConteoPapasService } from './conteo-papas.service';
import { ConteoPapasController } from './conteo-papas.controller';

@Module({
  controllers: [ConteoPapasController],
  providers: [ConteoPapasService],
})
export class ConteoPapasModule {}

