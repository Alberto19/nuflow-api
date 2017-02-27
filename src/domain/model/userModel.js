'use strict'
const mongo = require('mongoose'),
      Schema = mongo.Schema;

module.exports = mongo.model('User',
  new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId,
    //     require: false
    // },  
    name: {
        type: String,
        require: true
    },
    login:{
        type: String,
        unique: true,
        lowercase: true,
        require: true 
    },
    password:{
        type: String,
        select: false,
        require: true
    },
    facebook:{
        type: String,
        require: true
    },    
    picture:{
        type: String,
        require: true
    },  
    adress:{
        coordinates: [{
              longitude:Number,
              latitude:Number}] 
    },
    dateCreate:{
        type: Date,
        default: Date.now
    },
    dateLastLogin: Date,
    preference:[{tipo: String}],
    favorite:[{
            name: String,
            location: [{
                    longitude:Number,
                    latitude:Number
                }] 
            }],
    genre: String
  })
);
