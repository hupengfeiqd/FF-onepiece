var fs = require("fs");
var global = require("./config");

var controllerSet = [];
var pathMap = new Map();

function init (app) {
    var files = fs.readdirSync('web');
    for (var i = 0 ; i < files.length; i ++ ) {
        var temp = require("./web/" + files[i]);
        if (temp.path) {
            for (var [key,value] of temp.path) {
                if (pathMap.get(key) == null) {
                    pathMap.set(key,value);
                    app.post(key,value);
                } else {
                    throw new Error("url path异常，url：" + key);
                }
            }
            controllerSet.push(temp);
        }
    }
    console.log("服务已开启");
}

module.exports.init = init;
