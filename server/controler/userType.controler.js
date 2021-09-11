const ResponseController    = require('./responce.controler');
const CrudController        = require('./crud.controler');
const crud                  = new CrudController();
const UserType              = require('./../model/userType.model')

module.exports = class UserType extends ResponseController{
    constructor(){
    }

    create(req, res){
        try{
            let request = {
                userTypeName: ''
            }
            crud.create(UserType,).then(()=>{

            }).catch(()=>{

            })
        }catch(error){
            return this.errorResponse(req, res, 'Fattle Error');
        }
    }
}