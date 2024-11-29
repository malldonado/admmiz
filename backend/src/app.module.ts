// Importa os módulos necessários do NestJS e módulos personalizados
import { Module } from '@nestjs/common' // Decorador que define um módulo no NestJS
import { AppController } from './app.controller' // Importa o controlador da aplicação
import { AppService } from './app.service' // Importa o serviço da aplicação
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module' // Módulo para configurar variáveis de ambiente
import { UsersModule } from './users/infrastructure/users.module' // Módulo de usuários
import { TypeOrmModule } from '@nestjs/typeorm' // Módulo do TypeORM para integração com bancos de dados
import { UserEntity } from './users/domain/entities/user.entity' // A entidade de usuário que representa a tabela no banco de dados

// Define a classe principal do módulo da aplicação
@Module({
  // Define os módulos que serão importados para a aplicação
  imports: [
    // Configura o TypeORM com PostgreSQL, especificando as configurações de conexão
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de banco de dados
      host: 'localhost', // Endereço do servidor do banco de dados
      port: 5432, // Porta do banco de dados
      username: 'postgres', // Nome de usuário do banco de dados
      password: 'root', // Senha do banco de dados
      database: 'admmiz', // Nome do banco de dados
      entities: [UserEntity], // Entidades que representam as tabelas no banco de dados
      synchronize: true, // Se deve sincronizar automaticamente a estrutura do banco com as entidades
    }),
    EnvConfigModule.forRoot(), // Módulo para carregar variáveis de ambiente
    UsersModule, // Módulo que gerencia as operações de usuários
  ],
  // Define os controladores que serão usados na aplicação
  controllers: [AppController],
  // Define os provedores que serão usados na aplicação
  providers: [AppService],
})
export class AppModule {}
