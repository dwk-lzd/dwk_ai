# 图片加载

- <img src=''/>
    - 浏览器的下载线程
    - src  http 应用层协议
    - https://img.36krcdn.com/hsossms/20250313/v2_15ad8ef9eca34830b4a2e081bbc7f57a@000000_oswg172644oswg1536oswg722_img_000?x-oss-process=image/resize,m_mfit,w_960,h_400,limit_0/crop,w_960,h_400,g_center
        查询 ip 地址
    - 发送 网络带宽有限  就像公路一样
        并发 同时下载多个css，img 支持的比较好
        tcp/ip 
    - 网页（电商） 太多了 50+
    - 滚动页面 全部加载，页面会打不开

## 懒加载
    - 只加载需要加载的 
        - 可视区 
        - 滚动区域 scroll 
    - 不加载
        src 不能直接给，data-original 
        src？ 是img 功能函数？ 可以给一个占位图
    - 占位图
        - src 应该设置  但不能请求原来图片的地址（可能同时并发太多，图片太大）
        - 给个占位的图片 比较小 
            缓存 只需要请求一次
- 等页面加载完毕后 
    img 太多会严重影响页面的打开速度，这是第一重要的（因为会影响用户的体验） 
    data-original 中
    自定义属性  data-  数据属性
    图片的原地址是img 数据
    original 原来的
- 目前缺点 性能问题
    - 解决了性能问题（一次性加载图片，会造成卡顿影响页面加载） 首屏幕加载速度
    - 带来了新的问题 onScroll 触发的次数太多  这里是JS性能问题 
    - forEach  所有的imgs
    - getCoundingClientRect  触发回流
- 防抖 节流
- IntersetionObserver 
    - observer 观察 异步的，不是同步的  就好像在浏览器的后台
    - Intersection  rect  和可视区域交叉
    - 不再需要onscroll 不需要节流 