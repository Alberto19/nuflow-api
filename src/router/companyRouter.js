'use strict'
let CompanyRouter = require('express').Router();
let CompanyDAO = require('../domain/dao/companyDAO');
let token = require('./token');
let authentication = require('./authentication');

CompanyRouter.post('/create',(req, res)=>{
	CompanyDAO.persist(req.body).then((result)=>{
			res.status(201).send({
				message: 'success'
			});
	}).catch((err)=>{
		res.status(500).json("Erro interno");
	});
});

module.exports = CompanyRouter;
