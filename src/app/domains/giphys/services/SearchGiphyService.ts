import { injectable, inject } from 'tsyringe';
import HttpClient from '../../../shared/infra/axios/HttpClient';
import AppError from '../../../shared/errors/AppError';

import { IGiphyResponseCustomDTO, IGiphySearchDto } from '../dtos/GiphyDtos';

@injectable()
class SearchGiphyService {
  constructor(
    @inject('HttpClient')
    private httpClient: HttpClient,
  ) {}

  public async execute({
    toSearch,
    limit = 1,
  }: {
    toSearch: string;
    limit?: number;
  }): Promise<IGiphySearchDto[]> {
    const giphyResponse = await this.doGiphySearchRequest({ toSearch, limit });
    const {
      data: { data },
    } = giphyResponse;
    return data;
  }

  private async doGiphySearchRequest({
    toSearch,
    limit,
  }: {
    toSearch: string;
    limit: number;
  }): Promise<IGiphyResponseCustomDTO> {
    let response: IGiphyResponseCustomDTO;
    response = await this.httpClient.request({
      method: 'GET',
      url: `${process.env.GIPHY_API}?api_key=${
        process.env.GIPHY_KEY
      }&q=${toSearch.replace(/(\r\n|\n|\r)/gm, '')}&limit=${limit}&rating=${
        process.env.GIPHY_RATING
      }&lang=${process.env.GIPHY_LANG}`,
    });

    if (response.status !== 200) {
      throw new AppError(response.statusText, response.status);
    }
    return response;
  }
}

export default SearchGiphyService;
