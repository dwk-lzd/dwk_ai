// 启动http server
// 引入express框架
// import express from 'express'
// node 最初的commonjs 的模块化方案
const express = require('express')
// console.log(express);
const app = express() // 后端应用 App
// 路由
app.get('/', (req, res) => {
    // 返回index.html
    // res.send('hello') // str
    // response 有请求request 代表的是用户， 浏览器（proxy） url  localhost:1314  + get + path /  有响应response
    // http 足够简单  高并发 用户赶快走  断开联系
    // __dirname 项目的根路径
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html') // 文件路径

})
// 添加一个支持server push的路由
app.get('/sse', (req, res) => {
    // 支持server push 不断地服务端推送 少量的
    // 设置响应头
    res.set({
        // stream 文本流，事件
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache', // 禁止前端使用缓存
        'Connection': 'keep-alive' // 保持连接
    })
    res.flushHeaders(); // 发送响应头，但不结束响应。允许后续的res.write()调用将数据推送到客户端
    setInterval(() => {
        const message = `Current time is${new Date().toLocaleTimeString()}`
        // server push
        res.write(`data: ${message}\n\n`)
    }, 1000)
})
// http node的内置模块
const http = require('http').Server(app) // http 服务器 server 基本能力 B/S架构的程序
// 监听？伺服状态 伺候用户
http.listen(1314, () => {
    console.log('server is runing on 1314');
})