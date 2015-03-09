
import mongoose = require('mongoose');
import models = MEANSample.models;

var db = mongoose.connect('mongodb://localhost/mean_sample');

//スキーマ
var PersonSchema: mongoose.Schema = new mongoose.Schema({   //なんか二度手間感があります。
    name: String,
    age: Number,
    comment: String
});

export var PersonModel = mongoose.model('person', PersonSchema);



