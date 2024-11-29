// Importa as dependências necessárias para os testes do NestJS e Jest.
import { Test, TestingModule } from '@nestjs/testing' // Para criar um módulo de teste e compilar
import { AppController } from './app.controller' // Controlador que será testado
import { AppService } from './app.service' // Serviço que é utilizado pelo controlador

// Inicia o bloco de testes para o 'AppController'.
describe('AppController', () => {
  let appController: AppController // Declara uma variável para armazenar o controlador

  // Executado antes de cada teste. Configura o módulo de teste e instancia o controlador.
  beforeEach(async () => {
    // Cria e compila o módulo de teste.
    const app: TestingModule = await Test.createTestingModule({
      // Adiciona o controlador 'AppController' que será testado
      controllers: [AppController],
      // Adiciona o serviço 'AppService' que é usado pelo controlador
      providers: [AppService],
    }).compile()

    // Recupera a instância do controlador do módulo de teste e armazena em 'appController'
    appController = app.get<AppController>(AppController)
  })

  // Define um grupo de testes relacionados ao 'root' (página inicial)
  describe('root', () => {
    // Testa se o método 'getHello' do controlador retorna a string esperada
    it('should return "Hello World!"', () => {
      // A asserção verifica se o valor retornado é igual a "Hello World!"
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
