import { Test, TestingModule } from '@nestjs/testing';
import { ConteoPapasController } from './conteo-papas.controller';

describe('ConteoPapasController', () => {
  let controller: ConteoPapasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConteoPapasController],
    }).compile();

    controller = module.get<ConteoPapasController>(ConteoPapasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
