const db = require('../models/index');
//CRUD:

const getAccountService = (userId) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id: userId },
        })
        resolve({
            err: response ? 0 : 1,
            message: response ? 'Get successfull' : 'User not found',
            UserData: response
        });
    } catch (error) {
        reject(error)
    }
})


module.exports = {
    getAccountService,
};