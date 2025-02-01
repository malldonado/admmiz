# Usar a imagem oficial do PostgreSQL
FROM postgres:latest

# Definir variáveis de ambiente para configuração inicial
ENV POSTGRES_USER=root
ENV POSTGRES_PASSWORD=root
ENV POSTGRES_DB=admmiz

# Copiar scripts de inicialização, se houver
# Coloque scripts .sql ou .sh no diretório docker-entrypoint-initdb.d para execução automática
COPY ./init-scripts /docker-entrypoint-initdb.d/

# Expor a porta padrão do PostgreSQL
EXPOSE 5432
