/*
 * Person Web API
 */
import express = require('express');

export function save(req: express.Request, res: express.Response) {
    var person = <MEANSample.models.Person>req.body;   //POSTのデータはbodyで受け渡されます。
    console.log(person);
    res.json(true);
};