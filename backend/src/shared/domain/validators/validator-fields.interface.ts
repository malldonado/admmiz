// Define o tipo `FieldsErrors` para representar um objeto que mapeia campos a um array de strings com mensagens de erro
export type FieldsErrors = {
  [field: string]: string[] // Cada campo é uma chave com um array de mensagens de erro como valor
}

// Define uma interface `ValidatorFieldsInterface` que especifica as propriedades e métodos que um validador de campos deve ter
// `PropsValidated` é um tipo genérico que representa o formato dos dados validados
export interface ValidatorFieldsInterface<PropsValidated> {
  // `errors` armazena os erros de validação, onde cada campo pode ter múltiplas mensagens de erro
  errors: FieldsErrors

  // `validatedData` armazena os dados validados e processados corretamente
  validatedData: PropsValidated

  // Método `validate` para validar os dados fornecidos, retornando `true` se a validação foi bem-sucedida, `false` caso contrário
  validate(data: any): boolean
}
