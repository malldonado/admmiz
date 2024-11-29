// Importa os decoradores e funções necessários do NestJS
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'

// Importa o serviço de usuários que contém a lógica de negócio
import { UsersService } from './users.service'

// Importa os DTOs (Data Transfer Objects) para criação e atualização de usuários
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

// Define o controlador para a rota '/users'
@Controller('users')
export class UsersController {
  // O controlador recebe uma instância do serviço `UsersService` via injeção de dependência
  constructor(private readonly usersService: UsersService) {}

  // Define o endpoint POST para criar um usuário
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // Chama o método `create` do serviço de usuários, passando o DTO com os dados do novo usuário
    return this.usersService.create(createUserDto)
  }

  // Define o endpoint GET para obter todos os usuários
  @Get()
  findAll() {
    // Chama o método `findAll` do serviço de usuários para retornar todos os usuários
    return this.usersService.findAll()
  }

  // Define o endpoint GET para obter um usuário específico pelo ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    // Chama o método `findOne` do serviço, passando o ID do usuário
    return this.usersService.findOne(+id)
  }

  // Define o endpoint PATCH para atualizar um usuário existente pelo ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // Chama o método `update` do serviço, passando o ID do usuário e o DTO com os dados atualizados
    return this.usersService.update(+id, updateUserDto)
  }

  // Define o endpoint DELETE para remover um usuário pelo ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    // Chama o método `remove` do serviço para excluir o usuário com o ID fornecido
    return this.usersService.remove(+id)
  }
}
