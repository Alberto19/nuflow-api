'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;


  let companySchema = new Schema({
    name: {type: String,require: true},
    adress:{type: String, required: true},
    phone:{type: String, required: true},
    rating:{type: Number},
    site:{type: String},
    photos:[],
    reviews:[],
    lat:{type: Number, required: true}, 
    lon:{type: Number, required: true},
    mapsUrl:{type:String},
    days:[]
  });

module.exports = mongo.model('Company',companySchema);
