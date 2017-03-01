"use strict"

let app = require('express')();
let authentication = require('./authentication');

let userRouter = require('./userRouter');
let searchRouter = require('./searchRouter');

app.use('/user', userRouter);
app.use('/search',searchRouter);

module.exports = app;

