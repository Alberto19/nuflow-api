'use strict'
let UserRouter = require('express').Router();
let UserDAO = require('../domain/dao/userDAO');
let token = require('../tools/token');


UserRouter.post('/singUp',(req, res)=>{
	UserDAO.persist(req.body).then((result)=>{
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

UserRouter.post('/singIn', (req, res)=>{
	UserDAO.findOne(req.body).then((result)=>{
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
