var path = require('path');

var SRC_DIR = path.resolve(__dirname,"src");
var DIST_DIR = path.resolve(__dirname,"dist");

var config = {
    entry: SRC_DIR+"/app/index.js",
    output:
    {
        path:DIST_DIR+"/app",
        filename:"bundle.js",
        publicPath:"/app/"
    },
    module:
    {
        loaders:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader:"babel-loader",
                query:
                {
                    presets:['react','stage-2','es2015']
                }
            }
        ]
    }

};

module.exports = config;
