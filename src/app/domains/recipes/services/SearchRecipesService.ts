import { injectable, inject } from 'tsyringe';
import HttpClient from '../../../shared/infra/axios/HttpClient';
import AppError from '../../../shared/errors/AppError';

import { IRecipes, IRecipesSearchCustomDTO } from '../dtos/RecipesDtos';
import SearchGiphyService from '../../giphys/services/SearchGiphyService';

@injectable()
class SearchRecipesService {
  constructor(
    @inject('SearchGiphyService')
    private searchGiphyService: SearchGiphyService,

    @inject('HttpClient')
    private httpClient: HttpClient,
  ) {}

  public async execute(ingredients: string): Promise<IRecipes | undefined> {
    const recipes = [];

    const {
      data: { results },
    } = await this.doSearchRecipesRequest(ingredients);

    for await (const result of results) {
      const { title, ingredients: ingredientsToSplit, href: link } = result;

      const giphys = await this.searchGiphyService.execute({ toSearch: title });

      recipes.push({
        title,
        ingredients: ingredientsToSplit.split(', ').sort(),
        link,
        gif: giphys.length === 0 ? '' : giphys[0].images.original.url,
      });
    }

    return {
      keywords: ingredients.split(','),
      recipes,
    };
  }

  public async doSearchRecipesRequest(
    ingredients: string,
  ): Promise<IRecipesSearchCustomDTO> {
    let response: IRecipesSearchCustomDTO;
    response = await this.httpClient.request({
      method: 'GET',
      url: `${process.env.RECIPE_PUPPY_API}?i=${ingredients}`,
    });
    if (response.status !== 200) {
      throw new AppError(response.statusText, response.status);
    }
    return response;
  }
}

export default SearchRecipesService;
