'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      product_name: 'N95 Mask',
      product_description: 'NIOSH Certified set 0f 10',
      product_img_one: 'https://i.pinimg.com/originals/27/97/07/27970736454a5ceacafb35218f195aaf.png',
      price: 54.99,
      stock: 1000,
      createdAt: Sequelize.fn('NOW'),
      updatedAt: Sequelize.fn('NOW'),
    },
{
    product_name: 'Rubber Gloves',
    product_description: 'Latex surgical gloves set of 500',
    product_img_one: 'https://pngimg.com/uploads/medical_gloves/medical_gloves_PNG128.png',
    price: 24.99,
    stock: 10000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
    product_name: 'Hand Sanitizer',
    product_description: 'Etyhl Alcohol one bottle',
    product_img_one: 'https://lh3.googleusercontent.com/proxy/5QmEhFT7vNXehAe7Yy5i0IYRgDITzPJ4nf0HpG96jHSe0Vy5IP1eKCOuMPNetL0zzu99b_Yec-BCJEcG57mSXzo8W1TyhjJ2ndeHHz80iUxdai93mQ9Z07STkAzY2O1Z',
    price: 7.99,
    stock: 1000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
},
{
    product_name: 'Toilet Paper',
    product_description: 'Charmin 4 rolls',
    product_img_one: 'https://pngimg.com/uploads/toilet_paper/toilet_paper_PNG18285.png',
    price: 10000,
    stock: 1000,
    createdAt: Sequelize.fn('NOW'),
    updatedAt: Sequelize.fn('NOW'),
}], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
