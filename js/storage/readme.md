# Storage 存储
    - 前端存储
        - cookie
        存储啥玩意  
            - 登录状态
            - 购物车    
        - localStorage
        - sessionStorage
        -indexDB
    - 后端存储
        MySQL   NoSQL   MongDB
    - 缓存

## 首页
- 用户的登录状态
    cookie 
    - 服务器 识别用户 
    - B/S 架构软件 依靠的是http 协议
    - http 0.9版本 没有身份识别机制 
    - http 是无状态协议
        请求一次和1000次，拿到的内容都一致
        如何在用户请求时带上身份状态？
    - http 1.0 版本 正式版 
        header 请求头
        Content-Type:
        Authorization:
        Cookie uid=1241212
        用户带上，服务器解析 识别用户 知道你的身份了
        http 协议还是无状态的，请求头 可以夹带一些信息
    - 界面有哪些状态 
        未登录 已登录 用户身份  时间 会过期  当然也可以主动登出
        
- 前后端联调
    - 前端表单
        阻止默认行为
        收集表单值
        fetch 请求 await 等待服务器响应请求 
        POST /login api 地址  前后端接口
        后端
        构建后端的路由 /login
        用户名和密码的校验
        通过设置cookie  响应头 Set-Cookie
        服务器端的返回 http 一起回到请求端
        前端存储里 Cookie 有了内容

## Cookie
Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户。
- 每次http的时候，会自动带上cookie 信息
- cookie 小饼干（内容小） 只附带关键的信息，存储在浏览器中（位置）
- 每次都带上cookie，如果说http是有状态的，就不需要带cookie了，所以http协议时无状态的
- http 协议还是无状态的，每次独立请求，他是通过在请求头中携带cookie 信息，实现身份认证
