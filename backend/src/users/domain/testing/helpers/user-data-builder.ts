// Importa a biblioteca `faker`, que gera dados falsos para testes
import { faker } from '@faker-js/faker'

// Importa o tipo `UserProps` que define as propriedades de um usuário
import { UserProps } from '../../entities/user.entity'

// Define o tipo `Props` com propriedades opcionais para criação de dados de usuário
type Props = {
  name?: string // Nome do usuário, opcional
  email?: string // Email do usuário, opcional
  password?: string // Senha do usuário, opcional
  createdAt?: Date // Data de criação do usuário, opcional
  updatedAt?: Date // Data de atualização do usuário, opcional
}

// Função `UserDataBuilder` que cria um objeto `UserProps` com valores simulados
export function UserDataBuilder(props: Props): UserProps {
  return {
    // Define `name` com o valor de `props.name` se fornecido, ou um nome falso gerado pelo `faker`
    name: props.name ?? faker.person.fullName(),

    // Define `email` com o valor de `props.email` se fornecido, ou um email falso gerado pelo `faker`
    email: props.email ?? faker.internet.email(),

    // Define `password` com o valor de `props.password` se fornecido, ou uma senha falsa gerada pelo `faker`
    password: props.password ?? faker.internet.password(),

    // Define `createdAt` com a data fornecida ou com a data atual como padrão
    createdAt: props.createdAt ?? new Date(),

    // Define `updatedAt` com a data fornecida ou com a data atual como padrão
    updatedAt: props.updatedAt ?? new Date(),
  }
}
