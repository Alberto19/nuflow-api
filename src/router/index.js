"use strict"

let app = require('express')();
let jsonWebToken = require('jsonwebtoken');
let userRouter = require('./userRouter');

app.use('/user', userRouter);

module.exports = app;

