import { Test, TestingModule } from '@nestjs/testing';
import { ConteoPapasService } from './conteo-papas.service';

describe('ConteoPapasService', () => {
  let service: ConteoPapasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConteoPapasService],
    }).compile();

    service = module.get<ConteoPapasService>(ConteoPapasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
