import { Injectable } from '@nestjs/common' // Importa o decorador Injectable, que permite que a classe seja injetada como dependência.
import { CreateUserDto } from './dto/create-user.dto' // Importa o DTO que contém os dados para criação de usuário.
import { UpdateUserDto } from './dto/update-user.dto' // Importa o DTO que contém os dados para atualização de usuário.

@Injectable() // O decorador Injectable torna esta classe disponível para injeção de dependência no NestJS.
export class UsersService {
  // Método responsável por criar um novo usuário. Neste caso, ele simplesmente retorna uma string.
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user' // Retorna uma mensagem indicando que um usuário foi criado
  }

  // Método responsável por retornar todos os usuários. Neste caso, ele também retorna uma string.
  findAll() {
    return `This action returns all users` // Retorna uma mensagem indicando que todos os usuários serão retornados
  }

  // Método responsável por retornar um usuário específico, dado um ID. Ele recebe o ID como parâmetro.
  findOne(id: number) {
    return `This action returns a #${id} user` // Retorna uma mensagem com o ID do usuário solicitado
  }

  // Método responsável por atualizar um usuário específico. Recebe o ID do usuário e o DTO com os dados para atualizar.
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user` // Retorna uma mensagem com o ID do usuário que será atualizado
  }

  // Método responsável por remover um usuário. Recebe o ID do usuário a ser removido.
  remove(id: number) {
    return `This action removes a #${id} user` // Retorna uma mensagem com o ID do usuário que será removido
  }
}
