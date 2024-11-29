import { Test, TestingModule } from '@nestjs/testing' // Importa os módulos necessários para configurar o teste no NestJS
import { UsersService } from './users.service' // Importa o serviço que será testado

// Define a suíte de testes para o serviço UsersService
describe('UsersService', () => {
  let service: UsersService // Declara a variável que irá armazenar o serviço UsersService

  // Antes de cada teste, a configuração do módulo é realizada
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // Cria o módulo de testes com o UsersService como provider
      providers: [UsersService],
    }).compile() // Compila o módulo de testes

    // Obtém o serviço UsersService para usá-lo nos testes
    service = module.get<UsersService>(UsersService)
  })

  // Testa se o serviço está definido (ou seja, foi corretamente instanciado)
  it('should be defined', () => {
    expect(service).toBeDefined() // Verifica se o serviço foi corretamente criado
  })
})
