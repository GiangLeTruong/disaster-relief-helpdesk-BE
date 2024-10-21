require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.SERVER_HOST_DB_NAME, process.env.SERVER_HOST_DB_USER, process.env.SERVER_HOST_DB_PASSWORD, {
    host: process.env.DB_HOST_URL,
    dialect: 'mssql',
    options: {
        encrypt: true, // Sử dụng nếu bạn đang kết nối đến Azure
        trustServerCertificate: true // Thay đổi cho phù hợp với môi trường của bạn
    }
});
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();
//module.exports = sequelize;