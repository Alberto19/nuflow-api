'use strict'
let UserRouter = require('express').Router();
let userDAO = require('../domain/dao/userDAO');
let token = require('./token');
let authentication = require('./authentication');

UserRouter.post('/singUp',(req, res)=>{
	userDAO.persist(req.body).then((result)=>{
		token.createToken(result._doc).then((token)=>{
			res.status(201).send({
				token: token,
				message: 'success'
			});

		});
	}).catch((err)=>{
		res.status(500).json("Erro interno");
	});
});

UserRouter.post('/singIn',(req, res)=>{
	userDAO.findOne(req.body).then((result)=>{
		token.createToken(result._doc).then((token)=>{
			res.status(201).send({
				token: token,
				message: 'success'
			});

		});
	}).catch((err)=>{
		res.status(500).json("Erro interno");
	});
});

module.exports = UserRouter;
