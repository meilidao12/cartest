var express = require('express');
var app = express();

var admin = require('./routers/admin');

app.use('/',admin)
app.use('/admin',admin);

app.listen(3004,'127.0.0.1');