'use strict'
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const express = require('express');
const csv = require("csv-query");
const gulp = require('gulp');
require('./gulpfile');

const app = express(),
port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);
app.set('view engine', 'ejs');


app.listen(port);

console.log('Server started on: ' + port);
gulp.start('apidoc')
