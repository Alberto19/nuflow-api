'use strict'

const mongoose = require('mongoose');
const config = require('../../config');
const Connection = require('./Connection');
class MongoConnection extends Connection {

	GetStringConnection() {
		return config.database; // connect to database
	}

	Connect() {
		return mongoose.createConnection(this.GetStringConnection());
	}

	Close() {
		return mongoose.disconnect();
	}
}

module.exports = new MongoConnection();