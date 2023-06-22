import { Movie } from '../entities';
import { MovieUpdate, Pagination } from '../interfaces';
import { movieServices } from '../services';
import { Response, Request } from 'express';

const createMovie = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await movieServices.createMovie(req.body);
  return res.status(201).json(movie);
};

const readAllMovies = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const pagination: Pagination = await movieServices.readAllMovies(
    res.locals.pagination
  );
  return res.status(200).json(pagination);
};

const updateMovie = async (req: Request, res: Response): Promise<Response> => {
  const payload: MovieUpdate = req.body;
  const foundMovie: Movie = res.locals.movie;

  const movie: Movie = await movieServices.updateMovie(foundMovie, payload);
  return res.status(200).json(movie);
};
const deletMovie = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.deletMovie(res.locals.movie);
  return res.status(204).json();
};

export default { createMovie, readAllMovies, updateMovie, deletMovie };
