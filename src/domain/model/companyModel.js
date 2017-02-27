'use strict'
const mongo = require('mongoose'),
      Schema = mongo.Schema;

module.exports = mongo.model('Company',
  new Schema({
    nome: {
        type: String,
        require: true
        },
    url:{
        type: String,
        require: true 
    },
    adress:{
        coordinates: [{
              longitude:Number,
              latitude:Number}] 
    }
  })
);
