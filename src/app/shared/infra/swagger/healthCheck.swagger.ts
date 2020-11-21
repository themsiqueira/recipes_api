export const healthCheck = {
  tags: ['Health Check'],
  description: 'Retorna status da aplicação',
  produces: 'application/json',
  responses: {
    '200': {
      description: 'OK',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'UP',
          },
        },
      },
    },
  },
};
