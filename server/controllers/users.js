import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models';

export default {
  create(req, res) {
    const {
      firstname, lastname, username, email,
    } = req.body;
    let { password } = req.body;

    if (req.body.password.length <= 6) {
      return res.status(400).send({
        message: 'Password must be greater than 6',
      });
    }

    password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    return User
      .create({
        firstname,
        lastname,
        username,
        email,
        password,
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
