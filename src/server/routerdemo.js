var express = require('express');
var app = express();
var bodyparse = require('body-parser');
var admin = require('./routers/admin');
var login = require('./routers/login');

app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}));
app.use('/',login)
app.use('/admin',admin);


app.listen(3004,'127.0.0.1');