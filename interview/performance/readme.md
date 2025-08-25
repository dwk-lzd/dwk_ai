# 性能优化

## 重绘重排

- 重绘
    当元素样式改变但不影响布局时，浏览器重新绘制元素的过程。如改变颜色、背景等
- 重排
    DOM元素的尺寸、位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程
    重排一定会触发重绘，重绘不一定触发重排

### DEMO 1 批量修改DOM
```js
// 这是不对的  多次操作可能触发多次重排重绘
// 虽然现代浏览器会合并修改
// 但是可以避免
const el=document.getElementById('myEl')
el.style.width='100px'
el.style.height='100px'
le.style.margin='10px'
// good
el.style.cssText='width:100px;height:100px;margin:10px;' // 一次性修改多个样式
el.className='my-class' // 用类名而不是一堆的JS代码
```

### 使用文档碎片
```js
const fragment=document.createDocumentFragment()
for(let i= 0;i<10;i++){
    const el=doucument.createElement('div')
    fragment.appendChild(el)  // 没有重绘重排
}
document.body.appendChild(fragment) // 一次性插入DOM树中，只触发一次重排
// 批量添加元素时，使用document.createDocumentFragment() 优化
```

## 脱离文档流进行操作  下线
```js
const el=document.getElementById('myEl')
el.style.position='absolute' // 脱离文档流
el.style.display='none' // 隐藏元素，不占用空间
...进行大量DOM操作

el.style.display='block' // 显示元素
el.style.position='static' // 回到文档流中

```

### 缓存布局信息
```js
// offsetTop 读取 但是每次都会触发重排以获取盒子的布局信息
for(let i=0;i<100;i++){
    el.style.top=el.offsetTop+1+'px' // offsetTop每次都会触发重排
}

let top=el.offsetTop  // 缓存布局信息
for(let i=0;i<100;i++){
    top++
    el.style.top=top+'px' // 只需要一次重排
}

```

### 使用transform 代替位置调整
```js
el.style.left = '100px'
// 只触发重绘，性能更好
el.style.transform = 'translateX(100px)'
```


## 资源加载优化
    - 图片懒加载
    - 路由懒加载
        代码文件上， code spliting 代码分割
        lazy + suspense 组件懒加载
            import() 动态导入

    - 资源预加载
    未来可能会用到的资源
    <link rel="prefetch" href="xxx.js">  告诉浏览器提前获取用户可能访问的下一个页面或资源的方法。
    dns-prefetch  dns预解析   dns-prefetch可以指示浏览器提前执行DNS查找，这样当实际请求资源时，DNS查询的时间就可以被省略，从而加快资源的加载速度。
    preload  当前页面必须资源，立即加载   用于声明性地提前加载当前页面所需的资源，使它们更早可用，并且优先级更高。

    - script 资源的加载
        默认没有  
        async  并发
        defer   
        module // 功能
    - webp 格式图片 
        图片的优化，显著地减少体积，并且质量不受影响
    - 图标字体库
    减少HTTP 请求数

## JS 执行优化
    - 防抖节流
    - web worker 处理复杂计算
    - requestAniamtionFrame 优化动画
    - requstIdleCallback  react fiber 机制
        schedule 机制

## 框架层优化
    - momo，useMemo，useCallback  避免不必要地渲染
    - shadcn-ui 按需加载组件库
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
        Expires（客户端时间不准确） / Cache-Control  不请求
        Last-Modified / If-Modified-Since  时间戳  304
        Etag / If-None-Match
    - localStorage / sessionStorage/cookie
## 网络优化
    - CDN加速
        静态资源，分流，会缓存文件
        多路复用 多域名服务器 img1.baidu.com iamge2.baidu.com
    - Gzip压缩
    - HTTP/2 多路复用

## 首屏优化
    - SSR
        组件渲染在服务器端已经完成了编译、执行，浏览器端直接显示
    - 骨架屏
    - http 2.0 server push 首屏数据推送

## 性能测试
- chrome 的 performance面板
    可以看到各项性能指标，针对性的优化，给出优化建议

    - 减少首屏JS/css 体积 （code spliting）
    代码分割（Code Splitting）是一种将代码库拆分成更小、更易管理的块的技术，
    以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
    - 使用transform 代替位置调整，预加载相关资源
    掘金  JS = vue + vue-router   + App.vue + Home.vue + Components
    vue+vue-router 单独拆分 缓存 基本是不会变的
    App.vue + home.vue + Coomponents  业务代码 经常改，单独
    做了一次升级

- lighthouse
    是chrome 的一款性能打分插件，会在 性能、 无障碍、 最佳实践、 SEO  打分
    并给出问题和优化建议,非常细致
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint
    首内容绘制（First Contentful Paint, FCP）是衡量网页加载性能的指标，
    表示浏览器首次渲染出页面内容（如文本、图片等）的时间。
- LCP Largest Contentful Paint
    最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指标，
    表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。