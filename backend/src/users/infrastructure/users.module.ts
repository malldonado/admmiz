// Importa o decorador `Module` do NestJS e as classes de serviço e controlador para os usuários
import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'

// Define o módulo UsersModule
@Module({
  // Define os controladores que fazem parte deste módulo
  controllers: [UsersController],

  // Define os provedores de serviços, ou seja, as dependências que este módulo oferece
  providers: [UsersService],
})
export class UsersModule {}
