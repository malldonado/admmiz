// Importa utilitários de teste do NestJS para criar e gerenciar módulos de teste
import { Test, TestingModule } from '@nestjs/testing'

// Importa o controlador e o serviço que serão testados
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

// Descreve o grupo de testes para `UsersController`
describe('UsersController', () => {
  // Declara uma variável para armazenar a instância do controlador
  let controller: UsersController

  // Função executada antes de cada teste para configurar o módulo de teste
  beforeEach(async () => {
    // Cria um módulo de teste do NestJS com o controlador e o serviço necessários
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController], // Inclui `UsersController` no módulo de teste
      providers: [UsersService], // Inclui `UsersService` como provedor no módulo
    }).compile() // Compila o módulo para que possa ser usado nos testes

    // Obtém a instância do `UsersController` a partir do módulo de teste
    controller = module.get<UsersController>(UsersController)
  })

  // Testa se a instância do controlador foi corretamente definida
  it('should be defined', () => {
    expect(controller).toBeDefined() // Verifica se `controller` não é `undefined` ou `null`
  })
})
