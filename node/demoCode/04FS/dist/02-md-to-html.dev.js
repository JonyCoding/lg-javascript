"use strict";

var fs = require('fs');

var path = require('path');

var marked = require('marked');

var browserSync = require('browser-sync');
/**
 * 01 读取 md 和 css 内容
 * 02 将上述读取出来的内容替换占位符，生成一个最终需要展的 Html 字符串 
 * 03 将上述的 Html 字符写入到指定的 Html 文件中
 * 04 监听 md 文档内容的变经，然后更新 html 内容 
 * 05 使用 browser-sync 来实时显示 Html 内容
 */


var mdPath = path.join(__dirname, process.argv[2]);
var cssPath = path.resolve('github.css');
var htmlPath = mdPath.replace(path.extname(mdPath), '.html');
fs.watchFile(mdPath, function (curr, prev) {
  if (curr.mtime !== prev.mtime) {
    fs.readFile(mdPath, 'utf-8', function (err, data) {
      // 将 md--》html
      var htmlStr = marked(data);
      fs.readFile(cssPath, 'utf-8', function (err, data) {
        var retHtml = temp.replace('{{content}}', htmlStr).replace('{{style}}', data); // 将上述的内容写入到指定的 html 文件中，用于在浏览器里进行展示

        fs.writeFile(htmlPath, retHtml, function (err) {
          console.log('html 生成成功了');
        });
      });
    });
  }
});
browserSync.init({
  browser: '',
  server: __dirname,
  watch: true,
  index: path.basename(htmlPath)
});
var temp = "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <title></title>\n        <style>\n            .markdown-body {\n                box-sizing: border-box;\n                min-width: 200px;\n                max-width: 1000px;\n                margin: 0 auto;\n                padding: 45px;\n            }\n            @media (max-width: 750px) {\n                .markdown-body {\n                    padding: 15px;\n                }\n            }\n            {{style}}\n        </style>\n    </head>\n    <body>\n        <div class=\"markdown-body\">\n            {{content}}\n        </div>\n    </body>\n    </html>\n";