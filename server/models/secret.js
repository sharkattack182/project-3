'use strict';
module.exports = (sequelize, DataTypes) => {
  const Secret = sequelize.define('Secret', {
    message: DataTypes.STRING
    //item one
    //item 2
    // item 3 etc all can be null will probably be numeric and associated with an id for product 
  }, {});

  Secret.associate = function (models) {
    // associations can be defined here
    //set this up as the cart we need to shift the verification until after pressing checkout provide option of guest or sign in
  };

  return Secret;
};
