import { NextFunction, Request, Response } from 'express';
import { MovieRepo, MovieUpdate } from '../interfaces';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';
import { AppError } from '../errors';

const verifyIfNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieName: string = req.body.name;

  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const movieNameExists: Movie | null = await repo.findOneBy({
    name: movieName,
  });

  if (movieNameExists !== null && movieName !== undefined)
    throw new AppError('Movie already exists.', 409);

  return next();
};

export default verifyIfNameExists;
