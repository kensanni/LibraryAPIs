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
  signIn(req, res) {
    return User
      .findOne({
        where: {
          username: req.body.username,
        },
      })
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'User not found',
          });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = { id: user.id, username: user.username };
          const token = jwt.sign(payload, 'sannikay', {
            expiresIn: '2h',
          });
          res.status(200).send({
            success: true,
            message: 'Token Generated. Signin successful!',
            userId: user.id,
            token,
          });
        } else {
          res.status(400).send({
            error: 'Incorrect Login details',
          });
        }
      })
      .catch(error => res.status(400).send(error));
  },
};
