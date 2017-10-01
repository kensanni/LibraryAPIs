import { User } from '../models';

export default {
  create(req, res) {
    return User
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        membership_type: req.body.membership_type,
      })
      .then(user => res.status(201).send({
        success: true,
        messge: 'Account successfully created',
        username: user.username,
        id: user.id,
      }))
      .catch(error => res.status(400).send(error));
  },
};
