// Importa a função validateSync da biblioteca class-validator para fazer validações sincronas
import { validateSync } from 'class-validator'

// Importa tipos personalizados para a estrutura de erros e interface do validador de campos
import {
  FieldsErrors, // Define o formato de erros nos campos validados
  ValidatorFieldsInterface, // Interface que especifica métodos e propriedades esperadas para um validador de campos
} from './validator-fields.interface'

// Declara uma classe abstrata ClassValidatorFields que implementa ValidatorFieldsInterface
// A classe abstrata serve como base para outras classes que precisam validar dados, mas não pode ser instanciada diretamente.
export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  // Define uma propriedade errors que armazena os erros de validação encontrados, inicialmente nula
  errors: FieldsErrors = null

  // Define uma propriedade validatedData que armazena os dados validados caso não haja erros, inicialmente nula
  validatedData: PropsValidated = null

  // Método validate: realiza a validação dos dados recebidos e armazena os erros ou os dados validados
  validate(data: any): boolean {
    // Executa a validação dos dados e retorna uma lista de erros (se houver)
    const errors = validateSync(data)

    // Verifica se há algum erro de validação
    if (errors.length) {
      // Inicializa a propriedade errors como um objeto vazio para armazenar os erros de cada campo
      this.errors = {}

      // Itera sobre cada erro encontrado para armazenar o nome do campo e as mensagens de erro associadas
      for (const error of errors) {
        const field = error.property // Nome do campo que falhou na validação
        this.errors[field] = Object.values(error.constraints) // Armazena as mensagens de erro do campo
      }
    } else {
      // Caso não haja erros, armazena os dados validados em validatedData
      this.validatedData = data
    }

    // Retorna true se não houve erros, caso contrário, retorna false
    return !errors.length
  }
}
