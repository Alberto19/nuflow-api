'use strict'

const mongoose = require('mongoose');
const config = require('../../config');
const Connection = require('./Connection');
class MongoConnection extends Connection {

	GetStringConnection() {
		return config.database; // connect to database
	}

	Connect() {
		return mongoose.connect(this.GetStringConnection(), console.log('MondoDB started'));
	}

	Close() {
		return mongoose.disconnect();

	}
}

module.exports = new MongoConnection();