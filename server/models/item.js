'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    itemId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING, 
  }, {});

  Item.associate = function (models) {
    Item.belongsTo(models.Cart);
  };

  return Item;
};