'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail:true
				},
				unique: 'email'
			},
		
			password: DataTypes.STRING,
			first: DataTypes.STRING,
			last: DataTypes.STRING,
			address: DataTypes.STRING,
			city: DataTypes.STRING,
			state: DataTypes.STRING,
			zip: DataTypes.STRING,
			country: DataTypes.STRING,
			phone: DataTypes.STRING
		},
		{}
	);

	User.associate = function(models) {
		User.hasMany(models.Order, {
			onDelete: 'cascade'
		});
	};

	User.prototype.comparePassword = function(challenge) {
		return this.password === challenge;
	};

	return User;
};
