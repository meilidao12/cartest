var express = require('express');
var app = express();

//解决跨域
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

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get("/user/:id",function(req,res,next){
    console.log(new Date());
    // next();
    console.log('123');
    res.send('1e'); 
});


app.get('/set',function(req,res)
{
    console.log(req.query.aid);
    console.log(req.query.cid);
    res.send('设置');
})


var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})