'use strict';

const mongoose = require("mongoose");

const chocoSchema = new mongoose.Schema({

    title: { type: String },
    imageUrl: { type: String },
    email: { type: String }
})

const chocoModel=mongoose.model('chocolist',chocoSchema)

module.exports=chocoModel