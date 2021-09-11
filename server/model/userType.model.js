const Sequelize     = require('sequelize');
const db            = require('./db.model');

const UserType = db.define('userType', {
    id:{
        primaryKey: true,
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4
    },
    userTypeName:{
        type: Sequelize.STRING(),
    },
    note:{
        type: Sequelize.STRING(1024),
    },
    status_id:{
        type: Sequelize.UUIDV4,
        references: {
            model: 'status',
            key: 'id'
        }
    }
    });

UserType.sync().then(() => {
    console.log('User table created');
});

UserType.associate = function(models) {
    UserType.belongsTo(models.status, { foreignKey: 'status_id', targetKey: 'id'} );
}

module.exports = UserType;