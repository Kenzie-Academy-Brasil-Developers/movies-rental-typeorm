import { Router } from 'express';
import { movieControllers } from '../controllers';
import middlewares from '../middlewares';
import { movieCreateSchema, movieUpdateSchema } from '../schemas';

const movieRouter: Router = Router();

movieRouter.post(
  '',
  middlewares.validateBody(movieCreateSchema),
  middlewares.verifyIfNameExists,
  movieControllers.createMovie
);

movieRouter.get('', middlewares.pagination, movieControllers.readAllMovies);

movieRouter.use('/:id', middlewares.verifyIdExists);

movieRouter.patch(
  '/:id',
  middlewares.validateBody(movieUpdateSchema),
  middlewares.verifyIfNameExists,
  movieControllers.updateMovie
);

movieRouter.delete('/:id', movieControllers.deletMovie);

export default movieRouter;
