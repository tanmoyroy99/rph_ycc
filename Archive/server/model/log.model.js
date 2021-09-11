const Sequelize     = require('sequelize');
const db            = require('./db.model');
const StatusModel   = require('./status.model');

const LogDB = db.define('log', {
    ID:{
        primaryKey: true,
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4
    },
    tableName:{
        type: Sequelize.STRING(),
    },
    action:{
        type: Sequelize.STRING(),
    },
    actionNote:{
        type: Sequelize.STRING(5000),
    },
    status_id:{
        type: Sequelize.UUIDV4,
        references: {
            model: 'status',
            key: 'id'
        }
    }
    });

LogDB.sync().then(() => {
    console.log('log table created');
});

LogDB.associate = function(models) {
    LogDB.belongsTo(StatusModel, { foreignKey: 'status_id', targetKey: 'id'} );
}

module.exports = LogDB;