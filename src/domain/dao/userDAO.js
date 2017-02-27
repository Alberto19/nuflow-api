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
				saveUser.save((err, result)=>{
					if(err){
						defer.reject(err);
					}
					defer.resolve(result);
					db.Close();
				})
			return defer.promise;
		}
}
module.exports = new userDAO();