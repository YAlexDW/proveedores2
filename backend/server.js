'use strict'
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties = require('./config/properties');
const { Router } = require('express');
const DB = require('./config/db');

DB();

const app = express();
const router = express.Router();

app.use('/api', router);
authRoutes (router);
Router.get('/',(req,res)=>{
    res.send('Hello home');
});
app.use(router);

app.listen(properties.PORT,() =>console.log(`Server runing on port ${properties.PORT}`));