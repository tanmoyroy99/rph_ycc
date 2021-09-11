
module.exports = class CrudController {
    /**
     * Creates new status
     * @param {*} req 
     * @param {*} res 
     */
    create(model, modelData = {}) {
        return new Promise((resolve, reject) => {
            try {
                model.create(modelData).then(insertedRow => {
                    if (insertedRow && insertedRow.id) {
                        resolve(insertedRow);
                    } else {
                        reject('Not Inserted');
                    }
                }).catch(err => {
                    reject(err);
                });
            } catch (err) {
                reject(err);
            }
        });
    };

    /*
     * To get all the status present in the system
     * @param {*} req 
     * @param {*} res 
     */
    readOne(model, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                model.findOne(parameters).then(data => {
                    if (data) {
                        resolve(data);
                    } else {
                        resolve([]);
                    }
                }).catch(error => {
                    reject(error);
                });
            } catch (err) {
                reject(err.message);
            }
        });
    }

    /*
     * To get all the status present in the system
     * @param {*} req 
     * @param {*} res 
     */
    read(model, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                model.findAll(parameters).then(data => {
                    if (data) {
                        resolve(data);
                    } else {
                        resolve([]);
                    }
                }).catch(error => {
                    reject(error);
                });
            } catch (err) {
                reject(err.message);
            }
        });
    }

    /*
     * To get all the status present in the system
     * @param {*} req 
     * @param {*} res 
     */
    readAndCountAll(model, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                model.findAndCountAll(parameters).then(data => {
                    if (data) {
                        resolve(data);
                    } else {
                        resolve([]);
                    }
                }).catch(error => {
                    reject(error);
                });
            } catch (err) {
                reject(err.message);
            }
        });
    }
    /*
     * To get all the status present in the system with count
     * @param {*} req 
     * @param {*} res 
     */
    readAndCount(model, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                parameters.where.is_active = true;
                model.findAndCountAll(parameters).then(data => {
                    if (data) {
                        resolve(data);
                    } else {
                        resolve([]);
                    }
                }).catch(error => {
                    reject(error);
                });
            } catch (err) {
                reject(err.message);
            }
        });
    }

    /*
     * To get the count
     * @param {*} req 
     * @param {*} res 
     */
    count(model, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                parameters.where.is_active = true;
                model.count(parameters).then(data => {
                    resolve(data);
                }).catch(error => {
                    reject(error);
                });
            } catch (err) {
                reject(err.message);
            }
        });
    }


    /**
     * Updates existing status details
     * @param {*} req 
     * @param {*} res 
     */
    update(model, modelData = {}, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                console.log(parameters);
                model.update(modelData, parameters)
                    .then(([rowsUpdate, [updatedData]]) => {
                        console.log(rowsUpdate);
                        resolve(([rowsUpdate, [updatedData]]));
                    }).catch(err => {
                        reject(err);
                    });
            } catch (err) {
                reject(err.message);
            }
        });
    };

    /**
     * Deletes status by Id
     * @param {*} req 
     * @param {*} res 
     */
    delete(model, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                model.destroy(parameters).then(() => {
                    resolve('Success');
                }).catch(error => {
                    reject(error);
                });
            } catch (err) {
                reject(err);
            }
        });
    };

    /**
     * Creates new status
     * @param {*} req 
     * @param {*} res 
     */
    upsert(model, modelData = {}, parameters = {}) {
        return new Promise((resolve, reject) => {
            try {
                model.upsert(modelData).then(insertedRow => {
                    if (insertedRow) {
                        resolve(insertedRow);
                    } else {
                        reject([]);
                    }
                }).catch(err => {
                    reject(err);
                });
            } catch (err) {
                reject(err);
            }
        });
    };
}