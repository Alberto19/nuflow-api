'use strict'
const mongo = require('mongoose');
const Schema = mongo.Schema;
const bcrypt = require('bcrypt-nodejs');

 let userSchema = new Schema({
    name: {type: String,require: true},
    login:{type: String,unique: true,lowercase: true, require: true},
    password:{type: String,select: false,require: true},
    facebook:{type: String,require: true},    
    picture:{type: String,require: true},  
    adress:{coordinates: [{longitude:Number,latitude:Number}] },
    dateCreate:{type: Date, default: Date.now},
    dateLastLogin: Date,
    preference:[{tipo: String}],
    favorite:[{name: String,
            location: [{longitude:Number,latitude:Number}] 
            }],genre: String
  });

  userSchema.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')) return next();

      bcrypt.hash(user.password, null, null, function(err, hash){
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });

  userSchema.methods.comparePassword = function(password){
    var user = this;
    return bcrypt.compareSync(password, user.password);
  };

module.exports = mongo.model('User',userSchema);
