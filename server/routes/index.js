import controller from '../controllers';

export default (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Library API!',
  }));

  app.post('/api/users/signup', controller.users.create);
};
