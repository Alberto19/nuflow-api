'use strict'
let UserRouter = require('express').Router();
let userDAO = require('../domain/dao/userDAO');
let authentication = require('./token');

UserRouter.post('/singIn',(req, res)=>{
	userDAO.persist(req.body).then((result)=>{
		authentication.createToken(result._doc).then((token)=>{
			res.status(201).send({
				token: token,
				message: 'success'
			});

		});
	}).catch((err)=>{
		res.status(500).json("Erro interno");
	});
})


module.exports = UserRouter;
