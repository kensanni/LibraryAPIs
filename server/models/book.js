export default (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a title',
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an author',
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter an author',
        },
      },
    },
    isbn_number: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please input isbn_number',
      },
      unique: {
        args: true,
        msg: 'ISBN already exist',
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter isbn_number',
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a description',
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter a description',
        },
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Pease enter a quantity',
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please enter a quantity',
        },
      },
    },
  });

  Book.associate = (models) => {

  };
  return Book;
};
