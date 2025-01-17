import { Injectable } from '@nestjs/common';

@Injectable()
export class ConteoPapasService {
  private conteoPapas = [];

  findAll() {
    return this.conteoPapas;
  }

  create(data: any) {
    this.conteoPapas.push(data);
    return data;
  }

  findOne(id: number) {
    return this.conteoPapas.find((papa) => papa.id === id);
  }

  update(id: number, data: any) {
    const index = this.conteoPapas.findIndex((papa) => papa.id === id);
    if (index === -1) {
      return null;
    }
    this.conteoPapas[index] = { ...this.conteoPapas[index], ...data };
    return this.conteoPapas[index];
  }

  delete(id: number) {
    const index = this.conteoPapas.findIndex((papa) => papa.id === id);
    if (index === -1) {
      return null;
    }
    const deleted = this.conteoPapas.splice(index, 1);
    return deleted[0];
  }
}
