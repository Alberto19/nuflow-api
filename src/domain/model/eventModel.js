'use strict'
const mongo = require('mongoose'),
      Schema = mongo.Schema;

module.exports = mongo.model('Event',
  new Schema({
    type: {
        type: String,
        require: true
        },
    dateEvent:{
        type: Date,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true 
    },
    artists:[{
        type: String
    }],
    banner:{
        type: String,
    },
    coordinates: [{
              longitude:Number,
              latitude:Number}] 
  })
);

