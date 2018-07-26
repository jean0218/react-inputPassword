const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fileEntry = require('./fileEntry.js');

const webpackBaseConfig = {
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            images: path.resolve(__dirname, '../examples/static/images'),
        }
    },

    entry: {
        examples:path.resolve(__dirname, '../examples/index.js'),
        demo01:path.resolve(__dirname, '../examples/demo01.js')
    },
    
    module: {
        noParse: /node_modules\/(jquey\.js)/,
        rules: [{
            test: /\.(js|jsx)$/,
            type: 'javascript/auto',
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "es2015", 'stage-0', 'react'
                    ]
                }
            }]       
        },{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 25000,
                    name: 'images/[name][hash:6].[ext]',
                    // 我们选择加载的图片格式为png,jpg,jpeg,gif，并限定当文件小于25kb，转换为base64编码。
                    // 优势：将一些小并且不常更新的图片转换base64编码后，可以减少一次或多次http请求。
                    // 但这个limit应该定义成一个合适的值，因为如果将稍大些的图片转为base64后，会生成大量字符，
                    // 反而降低我们的加载速度。
                }
            }]
        },{
            test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
            }
        }]
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
}

fileEntry.map(function(item) {//新文件输出 
    webpackBaseConfig.entry[item.fileName] =  path.resolve(__dirname, item.sourceFile);
    const chunksSort = item.chunks
    const htmlPackage = new HtmlWebpackPlugin({
        //favicon: 'path/to/yourfile.ico',//给生成的 html 文件生成一个 favicon
        title: item.title, //生成的html文档的标题
        template: path.resolve(__dirname, item.template),
        filename: item.targetFile, //输出文件的文件名称，默认为index.html,可以配置输出文件指定目录位置,例如'html/index.html'
        //filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的。
        //指定生成的html文件内容中的link和script路径是相对于生成目录下的，写路径的时候请写生成目录下的相对路径。
        //hash: false,//true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
        showErrors: true, //是否将错误信息输出到html页面中,便于调试
        //inject: 'body', //所有JavaScript资源插入到body元素的底部
        chunks: item.chunks,
        //允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。
        //在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk；
        //excludeChunks: ,//这个与chunks配置项正好相反，用来配置不允许注入的thunk。
        chunksSortMode: (argument, argument2) =>{
            //none | auto| function，默认auto； 允许指定的thunk在插入到html文档前进行排序。
            //function值可以指定具体排序规则；auto基于thunk的id进行排序； none就是不排序
            var aIndex = chunksSort.indexOf(argument.names[0]);
            var bIndex = chunksSort.indexOf(argument2.names[0]);
            aIndex = aIndex < 0 ? chunksSort.length + 1 : aIndex;
            bIndex = bIndex < 0 ? chunksSort.length + 1 : bIndex;
            return aIndex - bIndex;
        } 
    });           
    webpackBaseConfig.plugins.push(htmlPackage);
});

module.exports = webpackBaseConfig;