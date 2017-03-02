'use strict'

const mongoose = require('mongoose');
const config = require('../../config');
const Connection = require('./Connection');
class MongoConnection extends Connection {


	GetStringConnection() {
		return config.database; // connect to database
	}

	Connect() {
		var db;
		mongoose.Promise = global.Promise
		mongoose.connect(this.GetStringConnection());
		db = mongoose.connection;
		return db; 
	}

	Close() {
		return mongoose.connection;
	}
}

module.exports = new MongoConnection();