var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    console.log('login 有请求')
    res.send('4');
})

module.exports = router;