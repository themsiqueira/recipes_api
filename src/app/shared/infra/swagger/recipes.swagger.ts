export const searchRecipes = {
  tags: ['Search Recipes'],
  description: 'Retorna receitas compativeis com as palavras chaves',
  parameters: [
    {
      name: 'i',
      in: 'query',
      description: 'Search params',
      required: true,
      type: 'string',
    },
  ],
  produces: 'application/json',
  responses: {
    '200': {
      description: 'Retorna as receitas encontradas',
      schema: {
        type: 'object',
        properties: {
          keywords: {
            type: 'array',
            description: 'Array contento as palavras chaves da busca',
            items: {
              type: 'string',
              description: 'Palavra chave da busca',
            },
          },
          recipes: {
            type: 'array',
            description: 'Array contento os resultados da busca',
            items: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  description: 'Titulo da receita',
                },
                ingredients: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description: 'Ingrediente da receita',
                  },
                  description: 'Ingredientes da receita',
                },
                link: {
                  type: 'string',
                  description: 'Link para da receita',
                },
                gif: {
                  type: 'string',
                  description: 'Link para imagem de aprensentação da receita',
                },
              },
            },
          },
        },
      },
    },
    '400': {
      description: 'Caso haja algum erro na request',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Mensagem de erro referênte a request',
          },
        },
      },
    },
    '500': {
      description:
        'Caso haja algum erro na request para serviços externos ou um problema interno da aplicação',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Mensagem de erro referênte a request',
          },
        },
      },
    },
  },
};
