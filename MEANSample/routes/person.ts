/*
 * Person Web API
 */
import express = require('express');

export function save(req: express.Request, res: express.Response) {
    console.log(req.params.person);
};