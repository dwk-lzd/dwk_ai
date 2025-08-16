# http 各个版本的特性

- OSI 七层协议
- 基于TCP/IP
- 三次握手/四次挥手
- http/https
- 浏览器缓存
    - 强缓存
    - 协商缓存
- http 各版本的特性
- TCP 和 UDP 的区别
- GET POST 区别

## 版本特性
- 讲清楚有哪些版本
    HTTP 0.9
    Hyper Text Transfer Protocol
    最早的版本，只支持GET请求，响应只有HTML文本，没有header
    只能传输简单网页，连图片、css、JS 都不能传
    image/jpg  text/css  text/js

    HTTP 1.0
    引入了请求头 header，能够传输多种类型数据
    图片、css、js 等
    cookie 但是仍热时无状态的 
    每次请求都要重新建立TCP连接
        开销浪费 同域名下的资源，一条路
        早期用户并不是那么多
        http 基于请求响应的简单协议  TCP连接， 断开

    HTTP 1.1

    - 用户太多了， 一定要解决TCP连接每次都要重新建立的问题
    - 推出了长链接
        Connetion: keep-alive
        一个TCP 可以处理多个请求，浏览器通过一个TCP链接连续请求
        页面、图片、脚本等多个资源，服务器处理完不会立刻断开（当然是需要同一域名下资源）
        保持链接，后续请求无需重新建立连接，节省时间和性能开销
        提高加速速度

        管道化 pipelining
        允许同时发多个请求，但响应必须按顺序返回

        数据分块传输 chunk

        你用管道化的浏览器，依次发送 获取首页、图片1、图片2  无需
        等待前一个响应。但服务器必须按顺序返回

        TCP 可靠的传输，一个通信的多个数据包，按顺序、全部到达浏览器
        没有能真正的并发，TCP 安全 响应时还是顺序的传输 
        队头阻塞  如果排在前面的资源传输慢，后面的就没有办法传输
    
        怎么优化网页加载速度，在通信这块

        - 路由懒加载， 分包
            路由切换的时候，动态加载
            App.jsx 不同的文件
            Login.jsx
        - http 优化，图片懒加载
            js/css/img 过多，合并文件
            同一个域名请求并发的上限是6个
        - base64 图片  html/css文件里，减少了请求
        - 图标字体库 iconfont
        - 开启压缩
        - 使用多个域名  静态资源的CDN服务器

        https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b1d62a3061d049f99146fa6c60dfb9f6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5o6Y6YeR6YWx:q75.awebp?rk3s=f64ab15b&x-expires=1755734855&x-signature=l7YwpvUywkFQbgzxrFeYaXQc5Bk%3D
        将资源分布在不同子域名下，Domain sharding 域名分片

        浏览器缓存  强缓存和协商缓存

    - http 2.0
        - 并发 多路复用
            一个TCP 连接上并发多个请求，不再队头阻塞
            多路复用把数据拆成帧交错传输，请求和响应可以并行独立
            不会相会阻塞
        - 二进制数据帧
            所有请求和响应都拆成小数据帧，通过一个连接并发传输，每个帧
            带有编号，制定是哪个文件，客户端和服务器端可以根据编号重组。
            无需排队，  谁先准备好就先发谁，解决了队头阻塞的问题

        头部压缩 减少重复header 传输

        服务器端推送 server push
        服务器端可以主动推送资源。首页GET/返回很快，但首屏还依赖app.css app.js
        等， 为了减少首轮返回时间，服务器可以主动推送这些资源。
    
    - HTTP 3.0
        基于QUIC 协议，改用UDP代替TCP 作为传输层

- 都是页面快速显示

## GET POST 区别
- 用途不一样
    GET 请求获取数据
    POST 提交数据
    我在开发中，会结合RestFul 协议 标准开发
    PATH/PUT 修改  DELTE  删除
    OPTIONS  预检请求  HEAD  文件的信息

- 数据传输方式
    GET  url  params  或  queryString  明文
    POST  请求体  相对安全

- 安全性
    GET 不安全 缓存，
    POST 相对安全 但是还要启用https 加密传输

- 数据长度限制
    GET 受URL 长度限制，2048个字节  2kb   不适合传输大量数据
    POST  没有长度限制， 适合大量数据传输，比如大文件上传

- 幂等性
    GET 是 对此执行都一致，不会改变服务器状态
    POST 非 可能创建新资源或修改

- 缓存与书签
    GET 可以被浏览器缓存， 可以收藏为书签
    POST 不被缓存，不能被收藏为书签

- 状态码
    GET 200
    POST 201
