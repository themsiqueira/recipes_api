import HttpClient from '../../src/app/shared/infra/axios/HttpClient';

export const mockHttpClient = new (<jest.Mock<HttpClient>>HttpClient)();
