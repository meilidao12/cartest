/**
 * Created by Administrator on 2017/6/28
 */
/*
 如果我们使用PHP来编写后端的代码时，需要Apache 或者 Nginx 的HTTP 服务器，并配上 mod_php5 模块和php-cgi，来处理客户端的请求相应。
 不过对 Node.js 来说，概念完全不一样了。使用 Node.js 时，我们不仅仅 在实现一个应用，同时还实现了整个 HTTP 服务器。
* */

//1.引入http模块

var http=require('http');
var url=require('url');
var tools= require('./tools');
//2.用http模块创建服务

    /*
     req获取url信息（request）
     res 浏览器返回响应信息 （response）
     * */

http.createServer(function(req,res){
    var result=url.parse(req.url,true);  //第一个参数是地址    第二个参数是true的话表示把get传值转换成对象
    console.log('aid='+result.query.aid);  /*获取url的get传值*/
    console.log('cid='+result.query.cid);
    var a = result.query.aid;
    var b = result.query.cid;
    var qwe  = tools.add(Number(result.query.aid),Number(result.query.cid));
    // var qwe = Number(a) + Number(b);
    console.log('res=' + qwe.toString());
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.end(qwe.toString()); 
}).listen(8001);