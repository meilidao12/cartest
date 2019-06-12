var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    console.log('admin 有请求')
    res.send('3');
})

router.post('/user',function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    var ary=[{date:1,name:"b"},{date:2,name:"b"}];

    res.send(ary);
})

module.exports = router;