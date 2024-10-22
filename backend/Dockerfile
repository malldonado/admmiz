# Etapa 1: Construir a aplicação
FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN yarn build

# Etapa 2: Executar a aplicação
FROM node:14

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist

COPY package*.json ./
RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/main.js"]
