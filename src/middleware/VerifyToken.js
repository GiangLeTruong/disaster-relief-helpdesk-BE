const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ApiError,
    HttpStatus } = require('../config/ApiError');
const VerifyToken = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(HttpStatus.BAD_REQUEST).json({
            code: ApiError.API_ERROR_001_REQUEST_TOKEN.status,
            message: ApiError.API_ERROR_001_REQUEST_TOKEN.message
        })
    }
    const accessToken = token.split(' ')[1]
    console.log('accessToken: ', accessToken)
    jwt.verify(accessToken, process.env.SERVER_JSWTOKEN, (err, user) => {
        if (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                code: ApiError.API_ERROR_002_REQUEST_TOKEN.status,
                message: ApiError.API_ERROR_002_REQUEST_TOKEN.message
            })
        }
        req.user = user
        next()
    })
}

module.exports = VerifyToken