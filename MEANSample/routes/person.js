var db = require('../db/db');
function save(req, res) {
    var person = req.body; //POSTのデータはbodyで受け渡されます。
    console.log(person);
    var personDAO = new db.PersonModel(person);
    personDAO.save(function (err, dbres) {
        if (err) {
            console.log("Error");
        }
    });
    res.json(true);
}
exports.save = save;
;
function query(req, res) {
    var result = db.PersonModel.find({}, function (err, docs) {
        res.json(docs);
    });
}
exports.query = query;
//# sourceMappingURL=person.js.map