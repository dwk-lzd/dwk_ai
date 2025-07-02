// es6 模块化
// mjs 后缀启动 使用es模块化
// 模块化是一种语言的能力
// node 默认不支持es6 模块化
// node 最新版本支持了 22版本  js后缀也能用es6 模块化
// node 准备跟require commonJS 共存
// es6 module 更先进
import http from 'http';

const server = http.createServer((req, res) => {
    res.end('hellp http server')
})
server.listen(1234);