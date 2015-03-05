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