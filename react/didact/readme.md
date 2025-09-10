# 手写 React

- Dideact
    - 命名空间 namespace
    - 对象字面量
    
- VDOM
    UI 表达 JSX
    JSX -> 怎么转成VDOM ？ 

- JSX react 优点
    js 里面编写html，及其简便的表达UI
    bable  React.createElement
    dideact.createElement


## Didact 运行的入口

- babel 将JSX 转义为React.createElement 方法调用，
    给相应的参数，生成虚拟DOM
    @babel/preset-react pragma: Didact.createElement 表示编译后的函数名字
    pragma JSX 不是react 的专属

## createElement
- App.jsx -> bable -> Didact.createElement(tag,props,...children)
    返回的结果 是一个VDOM
    由Vnode 节点组成的VDOM树，每个节点包含type，props
    两个属性，props.children 是子节点，也是应该对象
- render 生成真正的DOM

React.createElement 返回的 Element 就是一个描述“要在页面上渲染什么”的普通 JavaScript 对象（即虚拟 DOM 节点），
它包含 type、props 等属性，是 React 用来对比变化并高效更新真实 DOM 的虚拟表示。

- createTextElement 这么复杂？
    type 没有的
    children 没有的
    主要是为了统一，统一执行render

## 目标完成
- React is a namespace
- The createElement Function (工厂模式)
- The render Function
- Concurrent Mode 并发模式
- fiber 机制  可中断

## Concurrent Mode 并发模式
React Concurrent Mode 是一种让渲染过程可中断、可优先级排序的机制，
通过将工作拆分为小块并允许高优先级更新（如用户输入）插队，从而避免主线程阻塞，提升应用的响应性和流畅度。
fiber 节点 工作节点
- 中断
- 继续
- fiber 节点对象有哪些属性

## Render分成两个阶段
    - 渲染阶段 构建新的虚拟dom树，diff patches []
    - 提交阶段 把改变应用到DOM上

## diff 算法
- 同层级别比较  不然时间复杂度是O(n^3)
    - ABCED  EABCD   这样同层比较开销太大
    dom 开销比较大
    diff 算法除了考虑本身的时间复杂度之外，还要考虑一个因素：dom 操作的次数。
    移动操作比 新增+删除 操作开销要小，所以diff会优先考虑移动操作
    insertBefore

- 简单diff算法
    ABCD  DCAB
    多节点 diff 算法的目的是为了尽量复用节点，通过移动节点代替创建。

    ABEC  ABC
    new newChildren[i]
    new newChildren[i-1] 就会是B
    所以new newChildren[i-1].nextSibling 就是C
