module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define("Child", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    gender: DataTypes.STRING,
    allergies: DataTypes.STRING,
    medication: DataTypes.STRING,
    restrictions: DataTypes.STRING,

    profilePic: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  });
  Child.associate = (models) => {
    models.Child.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Child;
};
