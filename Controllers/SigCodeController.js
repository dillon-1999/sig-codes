"use strict";
const { sigCodeModel } = require('../Models/SigCodeModel');

module.exports = (app) => {
    app.get('/getCode', async(req, res) => {
        const { id } = req.query;
        const sigCode = sigCodeModel.getSigCode(id);
        let status = 200;

        if(!sigCode){
            status = 404;
        }
        res.status(status).json(sigCode);
    });
};