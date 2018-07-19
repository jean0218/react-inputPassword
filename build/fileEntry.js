/*---------------------------------------------------------
@ 创 建 者：lunjiao.peng
@ 功能描述：HTML生成文件配置
---------------------------------------------------------*/
const templatePath = '../examples/';
const fileEntry = [{
        fileName: 'index',
        template:templatePath + 'index.html',
        title: 'react InputPassword example',
        sourceFile:'../examples/index.js',
        targetFile:'./index.html', 
        chunks:['index'],
    },{
        fileName: 'demo01',
        template:templatePath + 'index.html',
        title: 'demo01',
        sourceFile:'../examples/demo/demoExample01.js',
        targetFile:'./demo01.html', 
        chunks:['demo01'],
     }];

module.exports = fileEntry;
