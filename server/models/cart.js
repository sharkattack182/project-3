'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    cartId: DataTypes.INTEGER,
  }, {});

  Cart.associate = function (models) {
    Cart.hasMany(models.Item);
    Cart.belongsTo(models.user)
  };

  return Cart;
};