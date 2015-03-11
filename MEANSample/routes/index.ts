/*
 * GET home page.
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Express' });
};

export function newForm(req: express.Request, res: express.Response) {
    res.render('newForm', { title: 'New Item' });
};

export function list(req: express.Request, res: express.Response) {
    res.render('list', { title: 'List Item' });
};

export function item(req: express.Request, res: express.Response) {
    console.log("req.params.id=" +req.params.id);
    res.render('item', { title: 'Item detail', itemid: req.params.id });
};


