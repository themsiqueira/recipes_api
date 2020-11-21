import { array, string } from 'yup';
import { Request, Response, NextFunction } from 'express';
import AppError from '../../../shared/errors/AppError';

export const validateIngedients = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const validationSchema = array().of(string()).min(1).max(3).required();

  const { i } = req.query;

  const ingredients = i?.toString().split(',');

  if (!validationSchema.isValidSync(ingredients)) {
    throw new AppError('Ingredients are not valid');
  }

  next();
};
