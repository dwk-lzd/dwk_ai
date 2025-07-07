# react  时间机制
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

