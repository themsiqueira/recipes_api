import 'reflect-metadata';
import 'jest-chain';
import { AxiosResponse } from 'axios';
import SearchGiphyService from '../../giphys/services/SearchGiphyService';
import AppError from '../../../shared/errors/AppError';
import HttpClient from '../../../shared/infra/axios/HttpClient';

import { mockHttpClient } from '../../../../../__mocks__/infra/Http.mock';
import {
  mockSearchGiphyService,
  mockSearchGiphyServiceResponse,
} from '../../../../../__mocks__/services/SearchGiphyService.mock';
import { mockSearchRecipesResponse } from '../../../../../__mocks__/services/SearchRecipesService.mock';
import SearchRecipesService from './SearchRecipesService';

jest.mock('../../giphys/services/SearchGiphyService');
jest.mock('../../../shared/infra/axios/HttpClient');

describe('Search Recipes Service', () => {
  const service = new SearchRecipesService(
    mockSearchGiphyService as SearchGiphyService,
    mockHttpClient as HttpClient,
  );

  beforeEach(() => {
    jest.spyOn(mockSearchGiphyService, 'execute').mockClear();
    jest.spyOn(mockHttpClient, 'request').mockClear();
  });
  test('Should be able to find recipes', async () => {
    jest
      .spyOn(mockHttpClient, 'request')
      .mockReturnValueOnce(Promise.resolve(mockSearchRecipesResponse));

    jest
      .spyOn(mockSearchGiphyService, 'execute')
      .mockReturnValue(Promise.resolve(mockSearchGiphyServiceResponse));

    const result = await service.execute('chesse');

    expect(result).toBeDefined().toHaveProperty('recipes');
  });

  test('Should not be able to find recipes', async () => {
    jest.spyOn(mockHttpClient, 'request').mockReturnValueOnce(
      Promise.resolve({
        status: 500,
        statusText: 'Internal server error',
      } as AxiosResponse<unknown>),
    );

    jest
      .spyOn(mockSearchGiphyService, 'execute')
      .mockReturnValueOnce(Promise.resolve(mockSearchGiphyServiceResponse));

    try {
      await service.execute('chesse');
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
    }
  });
});
