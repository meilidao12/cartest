// 定义一个tools.js的模块 
//模块定义 
var tools = { 
    sayHello: function() { 
        return 'hello NodeJS'; 
    },
    add: function(x, y) { 
        return x + y; 
    } 
}; 

// 模块接口的暴露 
//
//module.exports = tools; 
exports.sayHello = tools.sayHello;
exports.add = tools.add;