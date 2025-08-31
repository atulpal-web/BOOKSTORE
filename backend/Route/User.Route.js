const express = require('express');
const {  Signup, login } = require('../Controller/User.Controller');
const Router = express.Router()



Router.post('/Signup',Signup);
Router.post('/login',login);


module.exports = Router;