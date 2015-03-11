function index(req, res) {
    res.render('index', { title: 'Express' });
}
exports.index = index;
;
function newForm(req, res) {
    res.render('newForm', { title: 'New Item' });
}
exports.newForm = newForm;
;
function list(req, res) {
    res.render('list', { title: 'List Item' });
}
exports.list = list;
;
function item(req, res) {
    console.log("req.params.id=" + req.params.id);
    res.render('item', { title: 'Item detail', itemid: req.params.id });
}
exports.item = item;
;
//# sourceMappingURL=index.js.map