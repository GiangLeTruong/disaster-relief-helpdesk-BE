require('dotenv').config()
const sql = require('mssql')


//Test connection
const config = sql.connect({
    user: process.env.SERVER_HOST_DB_USER,
    password: process.env.SERVER_HOST_DB_PASSWORD,
    database: process.env.SERVER_HOST_DB_NAME,
    server: process.env.DB_HOST_URL,
    pool: {
        max: 3,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }

})
async function connectToSQLServer() {
    try {
        let pool = await sql.connect(config)
        //console.log("Connect to msSQL Server success");
        return pool;
    } catch (err) {
        console.error(err)
    }
}
module.exports = connectToSQLServer;