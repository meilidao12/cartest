var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    console.log('admin 有请求')
    res.send('3');
})

router.get('/user',function(req,res){
    res.send('admin user1');
})

module.exports = router;