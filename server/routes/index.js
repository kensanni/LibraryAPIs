import bookController from '../controllers/books';

export default (app) => {
  app.post('/api/books', bookController.create);
};
