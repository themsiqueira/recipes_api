import * as dotenv from 'dotenv';
import { healthCheck } from './healthCheck.swagger';
import { searchRecipes } from './recipes.swagger';

dotenv.config();

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Api para busca de receitas de pets com gifs',
    version: '1.0.0',
    title: 'Recipe Api',
    termsOfService: '',
    contact: {
      name: 'Mateus Siqueira',
      email: 'mateussiqueiracarneiro@outlook.com',
      url: 'https://github.com/themsiqueira/recipes_api',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: 'http://localhost:3333',
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/`,
      description: 'Local server',
    },
    {
      url: '',
      description: 'DEV ENV',
    },
    {
      url: '',
      description: 'QA ENV',
    },
    {
      url: '',
      description: 'PROD ENV',
    },
  ],
  paths: {
    '/healthcheck': {
      get: healthCheck,
    },
    '/recipes': {
      get: searchRecipes,
    },
  },
};
