import { container } from 'tsyringe';

import '../../domains/giphys/container';
import '../../domains/recipes/container';

import LoggerService from '../infra/logging/LoggerService';
import HttpClient from '../infra/axios/HttpClient';

container.registerSingleton<LoggerService>('LoggerService', LoggerService);
container.registerSingleton('HttpClient', HttpClient);
