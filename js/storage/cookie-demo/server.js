// node 后端
// http 模块 市node内置 的核心模块
// js 在命令行运行 后端
// js 有两种模块化方案
// require node 早期模块化方案commonJS
// import es6 更先进的模块化方案 module
// node 老版本 用得是require 关键字
// node 受欢迎 是因为 它内置了http模块  特别适合中小项目开发

// 端口 -> 某个服务
// 比如3306 是mysql 默认端口号 服务 进程（分配资源） 线程（执行）
// domain （localhost） -> ip 地址（127.0.0.1） -> 某台设备 -> port 端口 设备上的服务（进程）

// app.mjs和server.js 把1234 和8080 端口占用
// 一台设备上可以很多端口使用，有多个http服务  多个网站
// 不要使用一些特殊端口


const http = require('http')
const fs = require('fs') // file system
const path = require('path') //  路径模块

const server = http.createServer((req, res) => {
    // res.end('hellp http server')
    // http 协议基于请求响应的协议
    // 路由 Method + url 定位了服务器端的资源
    // 为了资源 
    if (req.method == 'GET' && (req.url == '/' || req.url == '/index.html')) {
        // console.log(__dirname, path.join(__dirname, 'public', 'index.html'));

        fs.readFile(path.join(__dirname, 'public', 'index.html'),
            // 异步 callback 
            (err, content) => {
                // 前端体验为主
                // 后端稳定为主
                if (err) {
                    res.writeHead(500); // 5xx 服务器错误
                    res.end('Server error')
                    return;
                }
                // 不只是html，css，js，jpg 各种资源
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(content)
            })
    }
    // 后端路由，暴露资源
    // localhost:8080/style.css?a=1andb=2 
    // 协议http://   localhost 域名    端口     /style.css 叫做path 路径  queryString
    if (req.method == 'GET' && req.url == '/style.css') {
        fs.readFile(path.join(__dirname, 'public', 'style.css'),
            (err, content) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Server Error')
                    return
                }
                res.writeHead(200, { 'Conten-Type': 'text/css' })
                res.end(content)
            })
    }
    if (req.method == 'GET' && req.url == '/script.js') {
        fs.readFile(path.join(__dirname, 'public', 'script.js'),
            (err, content) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Server Error')
                    return
                }
                res.writeHead(200, { 'Conten-Type': 'text / javascript' })
                res.end(content)
            })
    }
    if (req.method == 'POST' && req.url == '/login') {
        // 用户名和密码的校验
        res.writeHead(200, {
            // 服务器端设置的
            'Set-Cookie': 'user=admin;',
            'Content-Type': 'application/json'
        })
        res.end(
            JSON.stringify({
                success: true,
                msg: '登录成功'
            }
            )
        )
    }
    if (req.method == 'GET' && req.url == '/check-login') {
        // 怎么证明登录了?
        if (req.headers.cookie) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({
                loggedIn: true,
                username: 'admin'
            }))
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify({
                loggedIn: false,
                username: ''
            }))
        }


    }
})
server.listen(8080);