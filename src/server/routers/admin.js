var express = require('express');
var router = express.Router();




router.get('/',function(req,res){
    console.log('admin 有请求')
    res.send('3');
})

router.post('/user',function(req,res){
    console.log(req.body.name);
    console.log(req.body.age);
    res.send('admin user1');
})

module.exports = router;