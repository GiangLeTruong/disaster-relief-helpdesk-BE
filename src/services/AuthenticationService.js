const db = require('../models/index');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(5));


const registerService = ({ name, email, password, phone, role_id, age, address }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: { email },
            defaults: {
                name,
                email,
                password: hashPassword(password),
                phone,
                role_id,
                age,
                address
            }
        })
        const token = response[1] ? jwt.sign(
            {
                id: response[0].id,
                email: response[0].email,
                role_id: response[0].role_id
            }
            , process.env.SERVER_JSWTOKEN
            , { expiresIn: '5d' }) : null;
        resolve({
            err: response[1] ? 0 : 1,
            message: response[1] ? 'Register successfull' : 'Email is used',
            token
        });
    } catch (error) {
        reject(error)
    }
})

const loginService = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { email },
            raw: true
        })
        const isChecked = response && bcrypt.compareSync(password, response.password)
        const token = isChecked ? jwt.sign(
            {
                id: response.id,
                email: response.email,
                role_id: response.role_id
            }
            , process.env.SERVER_JSWTOKEN
            , { expiresIn: '1d' }) : null;
        resolve({
            err: token ? 0 : 1,
            message: token ? 'Login successfull' : response ? 'Password is wrong' : 'Email is wrong',
            Access_Token: token
        });
    } catch (error) {
        reject(error)
    }
})





module.exports = { registerService, loginService }