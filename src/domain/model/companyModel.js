'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


  let companySchema = new Schema({
    nome: {type: String,require: true},
    url:{type: String,require: true },
    adress:{
        coordinates: [{longitude:Number, latitude:Number}] }
  });

module.exports = mongo.model('Company',companySchema);
