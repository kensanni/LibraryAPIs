import { Book } from '../models';

export default {
  create(req, res) {
    return Book
      .create({
        title: req.body.title,
        author: req.body.author,
        isbn_number: req.body.isbn_number,
        description: req.body.description,
        quantity: req.body.quantity,
      })
      .then((book) => {
        res.status(201).send({
          success: true,
          data: book,
          msg: 'Book successfully added',
        });
      })
      .catch(error => res.status(400).send(error));
  },
};
