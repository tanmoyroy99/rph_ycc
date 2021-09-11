const Sequelize     = require('sequelize');
const db            = require('./db.model');

const Status = db.define('status', {
    id:{
        primaryKey: true,
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4
    },
    statusName:{
        type: Sequelize.STRING(),
    },
    note:{
        type: Sequelize.STRING(1024),
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
    });

Status.sync({force: false}).then(() => {
    console.log('Users table created');
});

Status.associate = function(models) {

};

module.exports = Status;
