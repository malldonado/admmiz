// Importa a função `v4` da biblioteca `uuid`, renomeando-a para `uuidv4`, para gerar identificadores UUID únicos
import { v4 as uuidv4 } from 'uuid'

// Declara uma classe abstrata `Entity` que representa uma entidade genérica no sistema
// `Props` é um tipo genérico que permite definir as propriedades específicas de cada entidade que estenda essa classe
export abstract class Entity<Props = any> {
  // Propriedade `_id` representa o identificador único da entidade, e é de somente leitura
  public readonly _id: string

  // Propriedade `props` armazena os dados da entidade e é de somente leitura
  public readonly props: Props

  // Construtor da classe que inicializa as propriedades `props` e `_id`
  // Se `id` for fornecido, `_id` será igual ao valor passado; caso contrário, um UUID será gerado automaticamente
  constructor(props: Props, id?: string) {
    this.props = props
    this._id = id || uuidv4() // Usa UUID gerado por `uuidv4` se `id` não for passado
  }

  // Getter `id` para retornar o valor do identificador da entidade
  get id() {
    return this._id // Corrigido para retornar `_id` (anteriormente `this.id`, o que causaria uma chamada recursiva)
  }

  // Método `toJSON` que converte a entidade em um objeto JavaScript
  // Inclui o ID e todas as propriedades (`props`) da entidade
  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id, // ID da entidade
      ...this.props, // Propriedades da entidade
    } as Required<{ id: string } & Props>
  }
}
