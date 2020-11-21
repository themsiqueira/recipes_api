import 'reflect-metadata';
import 'jest-chain';
import { AxiosResponse } from 'axios';
import AppError from '../../../shared/errors/AppError';
import HttpClient from '../../../shared/infra/axios/HttpClient';

import { mockHttpClient } from '../../../../../__mocks__/infra/Http.mock';
import { mockSearchGiphyResponse } from '../../../../../__mocks__/services/SearchGiphyService.mock';
import SearchGiphyService from './SearchGiphyService';

jest.mock('../../../shared/infra/axios/HttpClient');

describe('Search Giphy Service', () => {
  const service = new SearchGiphyService(mockHttpClient as HttpClient);

  beforeEach(() => {
    jest.spyOn(mockHttpClient, 'request').mockClear();
  });

  test('Should be able to find a gif', async () => {
    jest
      .spyOn(mockHttpClient, 'request')
      .mockReturnValueOnce(Promise.resolve(mockSearchGiphyResponse));

    const result = await service.execute({
      toSearch: 'chessburguer',
      limit: 1,
    });

    expect(result).toBeDefined().toHaveLength(1);
  });

  test('Should not be able find a gif', async () => {
    jest.spyOn(mockHttpClient, 'request').mockResolvedValueOnce(
      Promise.resolve({
        status: 500,
        statusText: 'Internal server error',
      } as AxiosResponse<unknown>),
    );

    try {
      await service.execute({
        toSearch: 'chessburguer',
      });
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
    }
  });
});
