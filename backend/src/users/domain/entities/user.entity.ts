// Importa a classe base `Entity` para criar uma entidade de domínio reutilizável
import { Entity } from '@/shared/domain/entities/entity'

// Define o tipo `UserProps`, que representa as propriedades de um usuário
export type UserProps = {
  name: string // Nome do usuário
  email: string // Email do usuário
  password: string // Senha do usuário
  createdAt?: Date // Data de criação do usuário, opcional
  updatedAt?: Date // Data de atualização do usuário, opcional
}

// Define a classe `UserEntity`, que herda de `Entity` e representa um usuário
export class UserEntity extends Entity<UserProps> {
  // Construtor da classe `UserEntity`, recebe `props` como as propriedades do usuário e um `id` opcional
  constructor(
    public readonly props: UserProps, // `props` contém os dados do usuário
    id?: string, // `id` é opcional e pode ser gerado automaticamente
  ) {
    super(props, id) // Chama o construtor da classe pai `Entity` para inicializar `props` e `id`

    // Define `createdAt` como a data atual, se não for fornecida
    this.props.createdAt = this.props.createdAt || new Date()

    // Define `updatedAt` como a data atual, se não for fornecida
    this.props.updatedAt = this.props.updatedAt || new Date()
  }

  // Método `update` que permite atualizar o nome do usuário
  update(value: string): void {
    this.name = value // Usa o setter `name` para atribuir o novo valor
  }

  // Método `updatePassword` que permite atualizar a senha do usuário
  updatePassword(value: string): void {
    this.password = value // Usa o setter `password` para atribuir o novo valor
  }

  // Getter para o campo `name`
  get name() {
    return this.props.name
  }

  // Setter privado para o campo `name`, usado internamente para atualizar o nome
  private set name(value: string) {
    this.props.name = value
  }

  // Getter para o campo `email`
  get email() {
    return this.props.email
  }

  // Getter para o campo `password`
  get password() {
    return this.props.password
  }

  // Setter privado para o campo `password`, usado internamente para atualizar a senha
  private set password(value: string) {
    this.props.password = value
  }

  // Getter para o campo `createdAt`, retorna a data de criação do usuário
  get createdAt() {
    return this.props.createdAt
  }

  // Getter para o campo `updatedAt`, retorna a data de atualização do usuário
  get updatedAt() {
    return this.props.updatedAt
  }
}
