require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/ViewEngine');
require('./config/DataBase');

const webRouters = require('./routes/web');
const apiRouters = require('./routes/api');
const app = express()
const port = process.env.SERVER_PORT || 3001
const hostname = process.env.SERVER_HOST_NAME || 'localhost'

//Config:
configViewEngine(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Route:
app.ue('/', webRouters);
app.use('/api', apiRouters);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Ctrl + click to open http://localhost:${port}/`)
})

module.exports = app;