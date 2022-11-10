"use strict";

const { db } = require('./db');

class VisitModel{
    constructor(db){
        this.db = db;
    }

    logVisit(ip){
        try{
            const sql = `
                INSERT INTO SiteVisits (ip)
                VALUES (@ip)
            `
            db.prepare(sql).run({ip});
            return true;
        } catch(e){
            console.log(e);
            return false;
        }
    }
}

exports.visitModel = new VisitModel(db);