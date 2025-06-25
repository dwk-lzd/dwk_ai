# 流式输出

- 流式输出（Streaming Output）是一种数据传输方式，
它允许服务器在生成内容的过程中逐步将部分结果发送给客户端，
而不是等待整个响应完全准备好后再一次性发送。这种方式可以显著减少用户等待时间，
尤其是在处理大文件下载、实时数据更新或长时间运行的任务时非常有用。

- 为什么会考这道题
    25年大厂必考题
    - LLM 聊天机器人（23年的AI爆款 -》 24年 推理 -》 25 年 AI Agent 年）  AI产品
    - 流式输出，属于优化用户体验，前端职责，

- 为何需要流式输出
    - 边生成边输出？
        后端、 LLM API 方式提供给我们
        AIGenarticContent 生成式的大模型 一个token一个token transform（google） 出来的
        “我是你的assistant”  token开销付费的 
        更快地看到响应

- 前端的职责
    - 良好的用户体验
    - 尽快反回结果 
    障眼法  生成需要花时间，我愿意等
    最懂用户心理的 

- 步骤
    - 前端能实现流式输出？
        setInterval 异步  事件机制 message

    - 后端怎么实现？ 
        socket 长链接
        http请求是基于请求响应式的，简单协议 关闭链接？
        http 2.0 server push 服务端推送

- Server-Sent Events (SSE) 是一种允许服务器向浏览器推送实时更新的技术。
它是HTML5规范的一部分，专门用于单向消息传递，即从服务器到客户端的数据流。
与WebSocket不同，SSE只支持服务器向客户端的通信，并且基于HTTP协议实现。

## 全栈能力
- npm init -y 初始化项目  node 后端
- npm i express 安装express 老牌的node 框架
- cosnt express =require('express') 引入express
- cosnt app=express() 创建后端应用
- cosnt http=require('http').Server(app) 创建http服务
- http.listent(1314,()=>{
    console.log('server is running on port 1314')
})  监听端口
