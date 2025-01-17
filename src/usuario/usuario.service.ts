import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './create-usuario.dto';  
import { UpdateUsuarioDto } from './update-usuario.dto';  

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

 
  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  
  async findAll() {
    return this.prisma.usuario.findMany({
      include: { rol: true, conteos: true },  
    });
  }

  
  async findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
      include: { rol: true, conteos: true },
    });
  }

  
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }


  async delete(id: number) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
