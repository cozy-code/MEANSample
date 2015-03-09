var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mean_sample');
//スキーマ
var PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    comment: String
});
exports.PersonModel = mongoose.model('person', PersonSchema);
//# sourceMappingURL=db.js.map