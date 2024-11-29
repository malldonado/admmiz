// Importa `UserEntity` e `UserProps` do módulo `user.entity` para representar a entidade de usuário e suas propriedades
// Importa `UserDataBuilder`, uma função auxiliar que cria dados fictícios de usuário para os testes
import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

// Define um conjunto de testes para a classe `UserEntity`
describe('UserEntity', () => {
  // Declara variáveis `props` para armazenar as propriedades do usuário e `sut` (System Under Test) para a instância da entidade de usuário
  let props: UserProps
  let sut: UserEntity

  // Executa antes de cada teste, inicializando `props` com dados fictícios e `sut` com uma nova instância de `UserEntity`
  beforeEach(() => {
    props = UserDataBuilder({})
    sut = new UserEntity(props)
  })

  // Testa se o construtor da `UserEntity` atribui corretamente as propriedades
  it('Constructor method should correctly assign properties', () => {
    expect(sut.props.name).toBe(props.name)
    expect(sut.props.email).toBe(props.email)
    expect(sut.props.password).toBe(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
    expect(sut.props.updatedAt).toBeInstanceOf(Date)
  })

  // Testa o getter do campo `name`
  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined()
    expect(sut.props.name).toEqual(props.name)
    expect(typeof sut.props.name).toBe('string')
  })

  // Testa o setter do campo `name`
  it('Setter of name field', () => {
    sut['name'] = 'other name'
    expect(sut.props.name).toEqual('other name')
    expect(typeof sut.props.name).toBe('string')
  })

  // Testa o getter do campo `email`
  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined()
    expect(sut.props.email).toEqual(props.email)
    expect(typeof sut.props.email).toBe('string')
  })

  // Testa o getter do campo `password`
  it('Getter of password field', () => {
    expect(sut.props.password).toBeDefined()
    expect(sut.props.password).toEqual(props.password)
    expect(typeof sut.props.password).toBe('string')
  })

  // Testa o setter do campo `password`
  it('Setter of password field', () => {
    sut['password'] = 'other password'
    expect(sut.props.password).toEqual('other password')
    expect(typeof sut.props.password).toBe('string')
  })

  // Verifica se o campo `createdAt` é uma data válida
  it('should return a valid Date for the createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined()
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  // Verifica se o campo `updatedAt` é uma data válida
  it('should return a valid Date for the updatedAt field', () => {
    expect(sut.props.updatedAt).toBeDefined()
    expect(sut.props.updatedAt).toBeInstanceOf(Date)
  })

  // Testa o método `update` para atualizar o campo `name` do usuário
  it('Should update a user', () => {
    sut.update('other name')
    expect(sut.props.name).toEqual('other name')
  })

  // Testa o método `updatePassword` para atualizar o campo `password` do usuário
  it('Should update the password field', () => {
    sut.updatePassword('other password')
    expect(sut.props.password).toEqual('other password')
  })
})
