import { Request, Response } from 'express';
import { Controller, Get, Middleware } from '@overnightjs/core';
import { container } from 'tsyringe';

import { validateIngedients } from '../../../validators/validateIngredients';
import SearchRecipesService from '../../../services/SearchRecipesService';

@Controller('recipes')
export class RecipeController {
  @Get('')
  @Middleware([validateIngedients])
  async get(req: Request, res: Response): Promise<Response> {
    const { i } = req.query;

    const searchRecipesService = container.resolve(SearchRecipesService);
    const recipes = await searchRecipesService.execute(i as string);
    return res.json(recipes);
  }
}
