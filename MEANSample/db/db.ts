
import mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/mean_sample');

//スキーマ
var PersonSchema: mongoose.Schema = new mongoose.Schema({   //なんか二度手間感があります。
    name: String,
    age: Number,
    comment: String
});

//モデル
export var PersonModel = mongoose.model('PersonModel', PersonSchema);
