"use strict"

let app = require('express')();
let userRouter = require('./userRouter');

app.use('/user', userRouter);

module.exports = app;

