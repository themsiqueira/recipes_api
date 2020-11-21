# Recipes API

Este é um projeto de uma API REST com objetivo de exercitar DDD, nodejs, typescript, docker, swagger, e testes.
A api busca receitas no (http://www.recipepuppy.com/about/api/) e os gifs para apresentação das receitas no (https://developers.giphy.com/docs/).
O projeto pode ser iniciado dentro de um container _Docker_ e fora do container, a seguir temos o passo a passo:

# Como configurar o projeto sem o docker:

### 1. Instale o NodeJS

- _NodeJS:_ https://nodejs.org/en/

### 2. Instale o yarn ou npm

- _yarn:_ https://yarnpkg.com/lang/en/

### 3. Ambiente

- .env:_ Crie um arquivo na pasta raiz com nome de .env, e copie as variaveis do .env.example, e preencha com seus respectivos valores.

# Rodando o projeto:

Antes de iniciar instale as dependências do projeto:

`yarn install`

## Comandos disponíveis

Abaixo temos alguns comandos úteis para execução, build e testes.

- Criar o build do projeto para deploy:
  `yarn build`

* Executar o projeto localmente:
  `yarn start`

- Executar os testes com o jest:
  `yarn test`

# Como configurar o projeto com o docker:

Primeiramente você deve ter o docker e o docker compose instalado, abrir o terminal na pasta raiz do projeto, e executar o comando abaixo:

  `docker-compose run api --services-ports`

> Obs: a pasta raiz você vai encontrar uma _Dockerfile_ nela contém as tags _ENV_ essas são variavés de ambientes e podem ser alteradas

# Requisição dos dados

A documentação da aplicação se encontra nas rotas abaixo:

- Localhost:
  `http://localhost:3333/api/docs`

* Produção:
  `https://recipepuppy-api.herokuapp.com/api/docs`

A chamada é do tipo HTTP/GET e deve ser feita pela url abaixo:

- Localhost:
  `http://localhost:3333/recipes`

* Produção:
  `https://recipepuppy-api.herokuapp.com/recipes`

> Obs: a porta pode ser configurada no arquivo .env

A Aplicação recebe um query param na url _i_ com os ingredientes para busca das receitas, devendo ser enviado no minimo _1_ e no maximo _3_, os parametros devem ser enviados separados por virgula, conforme o exemplo abaixo:

- Localhost:
  `http://localhost:3333/recipes?i=onion,tomato`

* Produção:
  `https://recipepuppy-api.herokuapp.com/recipes?i=onion,tomato`

O retorno da chamada será conforme o exemplo abaixo:

```
{
  "keywords": [
    "onion",
    "tomato"
  ],
  "recipes": [
    {
      "title": "Dehydrating Tomatoes",
      "ingredients": [
        "tomato"
      ],
      "link": "http://www.recipezaar.com/Dehydrating-Tomatoes-325795",
      "gif": "https://media0.giphy.com/media/3o6nV9zCdncC1jdcvC/giphy.gif?cid=2d89829dgzroek27r35gukv7ogpcpw7lkfou6waebxs8d3bl&rid=giphy.gif"
    },
  ],    
}
```
Esta é somente uma aplicação básica de estudo.

> Obs: Endereço de produção da aplicação é https://recipepuppy-api.herokuapp.com/