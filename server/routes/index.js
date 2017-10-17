import controller from '../controllers';
import bookController from '../controllers/books';

export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Library API!',
  }));

  app.post('/api/users/signup', controller.users.create);
  app.post('/api/users/signin', controller.users.signIn);
  app.post('/api/books', bookController.create);
};
