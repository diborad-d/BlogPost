module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        length: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        length: [1]
      }
    },
    catagory: {
      type: DataTypes.STRING,
      defaultValue: "All Catagories"
    }
  });
  return Post;
};
