export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a username',
      },
      unique: {
        args: true,
        msg: 'Username already exists',
      },
      validate: {
        len: {
          args: [4, 10],
          msg: 'Username should be between 4 to 10 characters',
        },
      },

    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a username',
      },
      unique: {
        args: true,
        msg: 'Username already exists',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password',
      },
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Password should be alphanumeric',
        },
        len: {
          args: [6, 20],
          msg: 'Password should be between 4 to 20 characters',
        },
      },
    },
    membership_type: {
      type: DataTypes.STRING,
      defaultValue: 'Bronze',
      validate: {
        isIn: {
          args: [['Bronze', 'Silver', 'Gold']],
          msg: 'Membership should either be Bronze, Silver or Gold',
        },
      },
    },
  });
  User.associate = (models) => {

  };
  return User;
};
