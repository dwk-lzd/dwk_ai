# react  事件机制
- js 事件机制
    - 异步
    - 监听一个事件
        - addEventListener() 
        DOM2 事件
        - DOM0 事件
        <a onclick="doSomething()"></a>
        - DOM1 ?  DOM 版本， DOM1没有去做事件升级
    - addEventListener(type, listener，useCapture?)  
        - callback 是异步处理的称呼
        - promise then 
        - async await  
        监听器 
- 注册事件 addEventListener()
- useCapture  false 默认值
    页面时浏览器渲染引擎按像素点画出来的 
    先捕获 document -> 一层层去问，往下捕获
        要捕获才能知道哪个元素触发了事件
        先触发父元素事件
    event.target 
        捕获阶段结束，拿到event.target
    冒泡
        event.target 冒泡到html  冒泡回去到根，就知道先触发哪个原始事件
        事件让他在冒泡阶段执行
        可以清楚的知道在哪个元素先触发了事件

## 事件委托优势 delegation 
- 性能优化
    - 极致将事件委托给最外层元素
    react 大型项目开发 
    给我们的事件节点event.target 添加一个唯一属性
- 动态节点事件
    滚动到底部，一次新增一堆的新元素
    事件委托可以有效解决
- 同一元素同一事件注册多次
    - dom节点
    - event type 
    - 监听器（回调函数） event loop
        并且添加 event 对象
    - useCapture 

    - event.preventDefault() 阻止默认行为
        form submit
        a
    - event.stopPropagation() 阻止冒泡

- 用户交互的便利体验问题
    - toggle按钮
    - 点击页面任何地方可以关闭  方便 stopPropagation()
    - 显示区域可以交互，stopPropagation()

