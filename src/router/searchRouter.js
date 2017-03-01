'use strict'
let SearchRouter = require('express').Router();
let token = require('./token');
let authentication = require('./authentication');
let searchService = require('../services/searchService');

SearchRouter.post('/places',authentication,(req, res)=>{
		let location = req.body.location;
		let radius = req.body.radius;
		let keyword = req.body.keyword;

	searchService.pesquisa(location, radius, keyword)
	.then((result)=>{
		res.status(201).send({
			response: result
		})

	})
});

module.exports = SearchRouter;

	// userDAO.persist(req.body).then((result)=>{
	// 	token.createToken(result._doc).then((token)=>{
	// 		res.status(201).send({
	// 			token: token,
	// 			message: 'success'
	// 		});

	// 	});
	// }).catch((err)=>{
	// 	res.status(500).json("Erro interno");
	// });