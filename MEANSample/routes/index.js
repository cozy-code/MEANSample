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
//# sourceMappingURL=index.js.map