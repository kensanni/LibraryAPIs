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
