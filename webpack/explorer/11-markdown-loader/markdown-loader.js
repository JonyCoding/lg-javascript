const marked = require('marked')
module.exports = sources => {
    // console.log(sources);
    // return "console.log('hello')"
    // 转化为html
    const html = marked(sources)
    // 返回将html转化为字符串后的字符串，并且加上export导出
    // return `module default ${JSON.stringify(html)}`

    // 返回html字符串交给下一个loader处理
    return html
}