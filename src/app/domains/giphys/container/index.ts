import { container } from 'tsyringe';
import SearchGiphyService from '../services/SearchGiphyService';

container.registerSingleton<SearchGiphyService>(
  'SearchGiphyService',
  SearchGiphyService,
);
