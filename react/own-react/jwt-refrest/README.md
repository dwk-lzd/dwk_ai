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
    npx prisma migrate dev --name init 初始化数据库表结构
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
    maxAge  过期时间
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

## 大文件上传
当文件比较大的时候，由于各种原因，容易失败，而且上传速度慢，
一但失败，需要重新上传，会让用户沮丧

采用分片上传策略（ 并发， 并发限流 ） ，将文件切分位多个小块
并行上传，提升稳定性和效率。上传前通过web worker 计算文件整体以及分片的 hash，
向服务器校验，若文件已存在则直接妙传。前端记录上传进度和已成功分片，支持断点续传，
避免重复上传，服务器按序接收分片，存储后进行合并，并检验最终文件的完整性，结合唯
一标志和分片索引，确保上传可靠。整个过程配合进度条和错误重试机制，提升用户体验与系统健壮性

- worker hash计算
- 性能优化
    上传文件的处理函数 handleFile 使用useCallback 缓存，避免
    重复创建
- typescript 的 使用
    - 主线程和worker 线程的通信，数据约定
    HashWorkerIn
    HashWorkerOut
    as 断言
    非空断言 file!.size

- useRef的高级使用场景
    可变对象
    - DOM对象
    - 对象
    - 保存值
    AbortController 取消请求对象，推迟到上传在实例化
    暂停的值也用 ref 保存

- es6 特性
    - Set 存储已经上传的分片索引
    - ?? 空值合并运算符
    - promise.all  并发
    - Map 和 Set

- restful api
    - uploadChunk  PUT /api/upload/chunk
    - 自定义请求头
    这里的 headers 通过自定义请求头传递元数据（文件哈希、分片序号），
    使服务端能在不解析请求体的情况下快速识别分片归属和顺序，提升处理效率和可扩展性。
    解析请求头就可以判断是否已上传的chunk 更快，避免重复操作
## 项目的难点
- 分片上传的并发控制
    promise.all + 递归
    并发限流的核心是：一开始只启动不超过 MAX_CONCURRENCY 个工人函数，每个工人执行完一个任务后会递归调用 next()，继续从队列取下一个任务，从而保证始终只有固定数量的工人在运行。这样既避免了同时创建过多 Promise 占用资源，又能充分利用并行度；等所有工人都把队列清空才 resolve，Promise.all 就能精确等待整个批次完成。