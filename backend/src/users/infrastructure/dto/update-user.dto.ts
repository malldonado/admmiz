// Importa a função `PartialType` da biblioteca `@nestjs/mapped-types`
import { PartialType } from '@nestjs/mapped-types'

// Importa a classe `CreateUserDto` do arquivo correspondente
import { CreateUserDto } from './create-user.dto'

// Define a classe `UpdateUserDto` que estende `PartialType(CreateUserDto)`
export class UpdateUserDto extends PartialType(CreateUserDto) {}
