'use strict'
let banco = require('../../db/MongoConnection');
let q = require('q');
let UserModel = require('../model/userModel');
var mongoose = require('mongoose');


class UserDAO {

	persist(usuario) {
		var defer = q.defer();
		let con = banco.Connect();
		con.on('error', () => {
			banco.Close();
		});

		con.once('open', function callback() {
			let saveUser = new UserModel({
				login: usuario.login,
				password: usuario.password
			});
			saveUser
				.save()
				.then((result) => {
					banco.Close();
					defer.resolve(result);
				})
				.catch(err => {
					defer.reject(err);
					console.log('Erro: ', err);
				});
		});
		return defer.promise;
	}

	findOne(usuario) {
		var defer = q.defer();
		let con = banco.Connect();
		con.on('error', () => {
			banco.Close();
		});
		con.once('open', function callback() {
			UserModel
				.findOne({
					login: usuario.login
				})
				.select('login password')
				.exec((err, user) => {
					if (err) {
						defer.reject({
							status: 500,
							message: "Erro ao procurar usuario"
						});
					} else if (!user) {
						defer.reject({
							status: 404,
							message: "User doesn't exist"
						});
					} else if (user) {
						let validPass = user.comparePassword(usuario.password);
						if (!validPass) {
							defer.reject({
								status: 401,
								message: "Invalid Password"
							});
						} else {
							defer.resolve(user);
						}
					}
					banco.Close();
				});
		});
		return defer.promise;
	}
}
module.exports = new UserDAO();