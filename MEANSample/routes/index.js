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
//# sourceMappingURL=index.js.map