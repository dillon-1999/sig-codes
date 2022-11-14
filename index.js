"use strict"

const express = require('express');
const app = express();
const path = require('path');
const { visitModel } = require('./Models/VisitModel.js');
const PORT = 8006;

app.use(express.static(path.join(__dirname, "public"), {
    extensions: ['html', 'js', 'css', 'jpg'],
}));
app.use(express.static('public'));
require("./Controllers/SigCodeController.js")(app);

app.get('/', (req, res) => {
	const options = {
		root: path.join(__dirname)
	};
	visitModel.logVisit(req.ip);
	res.sendFile('index.html', options);
});

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});