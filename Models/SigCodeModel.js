"use strict";

const { db } = require('./db');

class SigCodeModel {
    constructor(db){
        this.db = db;
    }

    getSigCode(id){
        try{
            const sql = `
                SELECT c.code, t.trans 
                FROM Codes c JOIN Translations t ON (c.id = t.id)
                WHERE c.id = @id
                `;
            return db.prepare(sql).get({id});
        }catch(e){
            console.log(e)
            return false;
        }
    }
}
exports.sigCodeModel = new SigCodeModel(db);