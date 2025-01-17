import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ConteoPapasService } from './conteo-papas.service';

@Controller('conteo-papas')
export class ConteoPapasController {
  constructor(private readonly conteoPapasService: ConteoPapasService) {}

  @Get()
  findAll() {
    return this.conteoPapasService.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.conteoPapasService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.conteoPapasService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.conteoPapasService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.conteoPapasService.delete(Number(id));
  }
}
