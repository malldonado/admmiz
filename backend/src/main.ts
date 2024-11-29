// Importa o NestFactory para criar a aplicação NestJS
import { NestFactory } from '@nestjs/core'
// Importa o módulo principal da aplicação
import { AppModule } from './app.module'
// Importa os adaptadores do Fastify para o NestJS
import {
  FastifyAdapter, // Adaptador que permite utilizar o Fastify como servidor HTTP
  NestFastifyApplication, // Interface que representa a aplicação NestJS configurada para usar Fastify
} from '@nestjs/platform-fastify'

// Função principal que inicializa e configura o servidor NestJS
async function bootstrap() {
  // Cria uma instância da aplicação NestJS configurada para usar o Fastify
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, // O módulo principal da aplicação
    new FastifyAdapter(), // Instancia o adaptador do Fastify para ser usado no NestJS
  )
  // Inicia o servidor na porta 3000, permitindo conexões de qualquer endereço IP (0.0.0.0)
  await app.listen(3000, '0.0.0.0')
}

// Chama a função bootstrap para iniciar a aplicação
bootstrap()
