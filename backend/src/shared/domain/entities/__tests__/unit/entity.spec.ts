// Importa a função `validate` da biblioteca `uuid` para validar identificadores UUID
import { validate as uuidValidate } from 'uuid'

// Importa a classe base `Entity` que representa uma entidade genérica no sistema
import { Entity } from '../../entity'

// Define o tipo `StubProps` que representa as propriedades da entidade de exemplo
type StubProps = {
  prop1: string // Primeira propriedade, do tipo string
  prop2: number // Segunda propriedade, do tipo number
}

// Cria uma classe `StubEntity` que extende a classe `Entity` utilizando o tipo `StubProps`
// Esta classe é uma implementação específica de uma entidade para testes
class StubEntity extends Entity<StubProps> {}

// Inicia uma suíte de testes chamada "Entity unit tests" para a classe `Entity`
describe('Entity unit tests', () => {
  // Primeiro teste: Verifica se a entidade inicializa com as propriedades e ID corretos
  it('Should set props and id', () => {
    // Define um objeto com propriedades de exemplo
    const props = {
      prop1: 'value1',
      prop2: 123,
    }

    // Cria uma nova instância de `StubEntity` passando as propriedades
    const entity = new StubEntity(props)

    // Verifica se as propriedades da entidade são iguais às propriedades passadas
    expect(entity.props).toStrictEqual(props)

    // Verifica se o ID (_id) foi gerado e não é nulo
    expect(entity._id).not.toBeNull()

    // Valida se o ID gerado é um UUID válido
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  // Segundo teste: Verifica se a entidade aceita um UUID válido como ID
  it('Should accept a valid uuid', () => {
    // Define as mesmas propriedades de exemplo
    const props = {
      prop1: 'value1',
      prop2: 123,
    }

    // Define um UUID válido
    const id = 'adfaf7ce-7151-41e6-8462-c7069aca52f4'

    // Cria uma nova instância de `StubEntity` passando as propriedades e o UUID
    const entity = new StubEntity(props, id)

    // Verifica se o ID da entidade é um UUID válido
    expect(uuidValidate(entity._id)).toBeTruthy()

    // Verifica se o ID da entidade corresponde ao ID passado
    expect(entity._id).toBe(id)
  })

  // Terceiro teste: Verifica se a entidade pode ser convertida em um objeto JavaScript
  it('Should convert a entity to a JavaScript object', () => {
    // Define as propriedades e o UUID para a entidade
    const props = {
      prop1: 'value1',
      prop2: 123,
    }
    const id = 'adfaf7ce-7151-41e6-8462-c7069aca52f4'

    // Cria uma nova instância de `StubEntity` com as propriedades e o UUID
    const entity = new StubEntity(props, id)

    // Verifica se o método `toJSON` retorna um objeto contendo o ID e as propriedades
    expect(entity.toJSON()).toStrictEqual({ id, ...props })
  })
})
