function save(req, res) {
    var person = req.body; //POSTのデータはbodyで受け渡されます。
    console.log(person);
    res.json(true);
}
exports.save = save;
;
//# sourceMappingURL=person.js.map