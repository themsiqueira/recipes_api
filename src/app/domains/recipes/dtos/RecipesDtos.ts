import { AxiosResponse } from 'axios';

export interface IRecipe {
  title: string;
  ingredients: string[];
  link: string;
  gif: string;
}

export interface IRecipes {
  keywords: string[];
  recipes: IRecipe[];
}

export interface IRecipesSearchDto {
  title: string;
  href: string;
  ingredients: string;
}

export interface IRecipesSearchCustomDTO extends AxiosResponse {
  data: {
    results: IRecipesSearchDto[];
  };
}
