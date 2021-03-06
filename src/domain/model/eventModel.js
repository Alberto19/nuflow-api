'use strict'
const mongoose = require('mongoose');
const  Schema = mongoose.Schema;


  let eventSchema = new Schema({
    type: {type: String,require: true},
    dateEvent:{type: Date,require: true},
    price:{type: String,require: true},
    description:{type: String, require: true },
    artists:[{type: String}],
    banner:{type: String,},
    coordinates: [{longitude:Number,latitude:Number}] 
  });

module.exports = mongoose.model('Event',eventSchema);

