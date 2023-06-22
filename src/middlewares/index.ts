import handleError from './handleError.middleware';
import validateBody from './validateBody.middleware';
import verifyIdExists from './verifyIdExists.middlleware';
import verifyIfNameExists from './verifyNameExists.middlleware';
import pagination from './pagination.middleware';

export default {
  handleError,
  validateBody,
  verifyIdExists,
  verifyIfNameExists,
  pagination,
};
