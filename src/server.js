require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const connectionToSQLServer = require('./config/database')
const webRouters = require('./routes/web');
const apiRouters = require('./routes/api');
const app = express()
const port = process.env.SERVER_PORT || 3001
const hostname = process.env.SERVER_HOST_NAME || 'localhost'

//Config:
configViewEngine(app);
connectionToSQLServer(app);

//Route:
app.use('/', webRouters);
app.use('/', apiRouters)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Ctrl + click to open http://localhost:${port}/`)
})