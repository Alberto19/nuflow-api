'use strict'
let  db = require('../../db/MongoConnection');
let q = require('q');
let UserModel = require('../model/userModel');

class userDAO{

		persist(usuario){
			var defer = q.defer();
				db.Connect();
				let saveUser = new UserModel({
					name: usuario.name,
					login: usuario.login,
					password: usuario.password
				});
				saveUser.save().then((result)=>{
					db.Close();
					defer.resolve(result);
				}).catch(err =>{
					defer.reject(err);
					console.log('Erro: ', err);
				});
			return defer.promise;
		}
}
module.exports = new userDAO();