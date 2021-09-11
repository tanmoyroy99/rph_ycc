const Sequelize     = require('sequelize');
const db            = require('./db.model');
const StatusModel   = require('./status.model');
const UserTypeModel = require('./userType.model');

const Users = db.define('users', {
    id:{
        primaryKey: true,
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4
    },
    firstName:{
        type: Sequelize.STRING(),
    },
    lastName:{
        type: Sequelize.STRING(),
    },
    emailId:{
        type: Sequelize.STRING(),
    },
    phoneNo:{
        type: Sequelize.STRING(),
    },
    type_id:{
        type: Sequelize.UUIDV4,
        references: {
            model: 'userType',
            key: 'id'
        }
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


Users.sync({force: false}).then(() => {
});

Users.associate = function(models) {
    Users.belongsTo(StatusModel, { foreignKey: 'status_id', targetKey: 'id'} );
    Users.belongsTo(UserTypeModel, { foreignKey: 'type_id', targetKey: 'id'} );
}
module.exports = Users;
