'use strict'
let UserRouter = require('express').Router();
let userDAO = require('../domain/dao/userDAO');

UserRouter.post('/create',(req, res)=>{
	userDAO.persist(req.body).then((result)=>{
		res.json("Success");
	});
})


module.exports = UserRouter;
