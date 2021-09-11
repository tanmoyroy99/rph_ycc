const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './server/db/ycc_db.db',
    "define": {
      "underscored": false,
      "timestamps": true,
      "freezeTableName": true,
    }
  });

  module.exports=sequelize