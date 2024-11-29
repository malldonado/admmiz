// Importa os decoradores necessários do NestJS
import { Controller, Get } from '@nestjs/common' // 'Controller' define o controlador e 'Get' é usado para mapear a rota GET
import { AppService } from './app.service' // Importa o serviço que será utilizado no controlador

// Define a classe AppController como um controlador no NestJS
@Controller()
export class AppController {
  // O controlador recebe uma instância do 'AppService' via injeção de dependência
  constructor(private readonly appService: AppService) {}

  // Define uma rota HTTP GET para a raiz da aplicação ("/")
  @Get()
  getHello(): string {
    // Chama o método getHello do AppService e retorna o resultado
    return this.appService.getHello()
  }
}
