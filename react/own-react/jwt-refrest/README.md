# next.js  全栈项目

- users & posts
- jwt 双token 鉴权
- 虚拟列表
    AI 爬虫 掘金100条数据
- 大文件上传
- ai 工程化
    流式输出
    function Tool
    mcp
- ai 搜索

## 双token
    单token localStorage 长期， 第三方拦截， 不安全
    安全 + 无感刷新登录
    双token
    - accessToken 校验身份  重要  时间有效期变短  以小时为单位
        过期怎么办
    - refreshToken 刷新 7天 时间长
        没有过期，refreshToken 发到服务器  /api/auth/refresh 
        返回新的accessToken 无感刷新
    - refreshToken 过期后， 去登录页重新登录
## 开发流程
- .env
    mysql url
    create database demo; 建立数据库
- prisima 初始化 
    安装 pnpm i prisma @prisma/client
    npx prisma init 初始化

    orm 工具
    object relation mapping
    User(表) => User(类)
    一行     =>       new User() 实例
    底层数据库操作  映射成 高级的面向对象操作

- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，
用于生成类型安全的数据库客户端。
    数据库的设计图
    比navicat  好的地方，schema + git  留下数据库设计和修改的历史
    文档型的，可以追踪. 留底. 方便团队合作

- Model 表的映射模型
    @@map("users")  指定模型对应的表名
    posts        Post[]  一对多的关系
    createdAt  updataAt   prisima 自动维护
    @id  主键  @unique 唯一索引
    Model User{
        columns name type  @default
        索引
        relation
    }

    - migraions 迁移文件
        记录 

- restful api
- lib/复用的js 模块
- regexp
    前端，后端都要会正则
    /^.+?[]{}$/ test 
    ^ 开始 $ 结束  严格匹配整个字符
    .  都匹配，一个字符
    ？ 0次或1次
    + 一次或多次
    * 0次或多次
    {n}  正好n次
    {n,} 至少n次
    {n,m}  n到m次
    []  字符集合
    [a-z]  a到z
    [A-Z]  A到Z
    [0-9]  0到9
    [a-zA-Z0-9]  a到z A到Z 0到9
    [^a-zA-Z0-9]  除了a到z A到Z 0到9

- bcryptjs  加密js 模块  单向的加密算法（不能被解密）
bcryptjs 是一个纯 JavaScript 实现的密码哈希库，用于安全地加密和校验密码。
    register 加密一次
    login   password 加密一次
    比较的是加密后的字符串是否相等
- 状态码
    - 200 OK
    - 201 Created
    - 400 Bad Request
    - 409 Conflict  冲突
    - 500 Internal Server Error

- middleware 的概念
    中间件  配置一个白名单
    /dashboard
    Middleware 是中间件，用于在请求和响应之间执行预处理逻辑，如日志、认证、数据解析等。
    - 配置一个需要登录的页面数组
    - some startWith  判断是否在白名单中
    - NextResponse.next()  放行
    - NextResponse.redirect(new URL('/login', request.url))  重定向到登录页

    - 通过jwt verify 方法拿到payload后，添加了自定义请求头
        x-user-id
        后续页面就可以拿到这个值

- JWT的构成
    - 头部
        签名算法 HS256
    - 载荷
        {userId:...}
    - 签名
        secretKey

- cookie
    httpOnly:true
    HttpOnly 可防止 JavaScript 访问 Cookie，有效抵御 XSS 攻击导致的令牌泄露。
    服务器端设置
    SameSite 可防止跨站请求伪造（CSRF）攻击，限制 Cookie 在跨域请求中的自动发送，提升安全性。
- 后端安全和性能
    - 一定要做容错处理
        try catch finally
    - 释放数据库对象
        await prisma.$disconnect()
    
- prisma client 的CRUD方法
    prisma.user.create()
    prisma.user.findUnique()
    prisma.user.updata({
        where:{},
        data:{}
    })