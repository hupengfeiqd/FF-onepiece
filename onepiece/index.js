var express = require('express');
var loader = require('./loader')
var app = new express();

loader.init(app);

app.listen(6666);
