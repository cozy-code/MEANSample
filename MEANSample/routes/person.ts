/*
 * Person Web API
 */
import express = require('express');
import db = require('../db/db');

export function save(req: express.Request, res: express.Response) {
    var person = <MEANSample.models.Person>req.body;   //POSTのデータはbodyで受け渡されます。
    console.log(person);

    var personDAO = new db.PersonModel(person);
    personDAO.save(function (err, dbres) {
        if (err) {
            console.log("Error");
        }
    });
    res.json(true);
};

export function query(req: express.Request, res: express.Response) {
    var result = db.PersonModel.find({}, function (err, docs) {
        res.json(docs);
    });
}