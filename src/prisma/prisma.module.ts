import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { RolModule } from '../rol/rol.module';
import { ConteoPapasModule } from '../conteo-papas/conteo-papas.module';

@Module({
  imports: [UsuarioModule, RolModule, ConteoPapasModule],
})
export class PrismaModule {}
