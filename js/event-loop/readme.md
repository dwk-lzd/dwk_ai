# event loop
事件循环机制 JS 执行机制

- js 单线程
    同一时刻只能做一件事情
    同步任务尽快执行完，渲染页面（重绘重排），响应用户
    交互（优先）
    耗时性的任务？
    - setTimeout/setInterval
    - fetch/ajax
    - eventListener
- script 脚本
    一个宏任务

- 微任务有哪些
    紧急的，优先的，同步任务执行完后的一个补充
    - promise.then()
    - MutationObserver
        dom 改变在页面渲染前 拿到DOM 有啥改变 
    - queueMicrotask
    - process.nextTick()

## 多进程和多线程
- CPU 轮询

- 进程
分配资源的最小单元
    内存（地址，物理） CPU计算的机会
    独立的进程ID 一定的大小，开销
    程序运行以进程为单位
    - 主进程 
        管理子进程 父子关系 并发 并行
        进程间的通信
    - 主线程
        执行JS代码...（同步任务在主线程中的执行栈中调用）
- 线程
    干活的 
- 进程间的通信
    两个独立进程间的通信开销很大
    父子进程就好点

- chorome浏览器是多进程架构
    - 浏览器主进程
        多线程
    - 一个tab就是一个渲染进程
        多线程
        几个tab 几个进程
        安全，一个页面crash了，别的不受影响
    - 主线程 主角
        js 单线程 
        - 简单
        - DOM编程模型 线程的争抢不可以 安全

- setTimeout  专属定时器线程  
    到时间了，callback 放入宏任务队列 
    放到event loop中 队列中
    为什么setTimeout 不准
    event loop机制
    宏任务，微任务 队列
- addEventListener  没有独立的线程
    本身就在DOM里面 不需要单独的线程 （可以直接由主线程扔到宏任务队列）
- fetch/xhr 专属的下载线程

- 渲染进程的主线程
    - 解析html -> 构建DOM树
    - 解析css -> 构建CSSOM树
    - 结合DOM树和CSSOM树，构建渲染树
    - layout 树
    - 合并图层
    - v8引擎 JS 执行
    - 独立的绘制线程

- 事件队列
    - 定时器到点了
    - onreadystatechange 4 （事件监听也属于宏任务）
    - 微任务队列
    - 宏任务队列

fetch/XMLHttpRequest 是不同的， then 是微任务， onreadystatechange 是事件监听，属于宏任务


- 页面渲染 

JS 和 渲染是互斥的 