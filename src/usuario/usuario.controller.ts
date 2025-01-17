import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './create-usuario.dto';
import { UpdateUsuarioDto } from './update-usuario.dto';
import { ParseIntPipe } from '@nestjs/common';  

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  
  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {  
    return this.usuarioService.findOne(id);
  }

 
  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.delete(id);
  }
}
