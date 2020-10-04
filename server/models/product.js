'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Item', {
    productId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    productPrice: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING, 
  }, {});

  Product.associate = function (models) {
    Product.belongsTo(models.Cart);
  };

  return Product;
};