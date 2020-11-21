import { AxiosResponse } from 'axios';
import { IGiphySearchDto } from '../../src/app/domains/giphys/dtos/GiphyDtos';
import SearchGiphyService from '../../src/app/domains/giphys/services/SearchGiphyService';

export const mockSearchGiphyResponse = {
  status: 200,
  data: {
    data: [
      {
        type: 'gif',
        id: 'uQvxobRExS9nG',
        images: {
          original: {
            url:
              'https://media1.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=6c634870477njxaitwa003z51csxlwbf0ksrxyc2xd1nox8t&rid=giphy.gif',
            hash: '391ed2fee59db0f444ad61d64353a4c2',
          },
        },
      },
    ],
  },
} as AxiosResponse<unknown>;

export const mockSearchGiphyServiceResponse = [
  {
    id: 'uQvxobRExS9nG',
    images: {
      original: {
        url:
          'https://media1.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=6c634870477njxaitwa003z51csxlwbf0ksrxyc2xd1nox8t&rid=giphy.gif',
        hash: '391ed2fee59db0f444ad61d64353a4c2',
      },
    },
  },
] as IGiphySearchDto[];

export const mockSearchGiphyService = new (<jest.Mock<SearchGiphyService>>(
  SearchGiphyService
))();
