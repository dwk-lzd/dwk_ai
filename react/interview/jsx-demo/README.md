# JSX 考点
- 何为JSX
    JS in XML（HTML是XML的一种形式）
    react 推崇的JavaScript语法糖（语法扩展），运行在JavaScript
    代码中嵌入HTML结构（function return JSX 组件）
    常用于React组件的定义，使得UI结构更直观易读
    React 的一大优点特性
- JSX 可以直接运行吗？
    不可以
- 就像.styl -> stylus 编译-》 css
<ul>
    <li key={todo.id}>{title}</li>
    <li key={todo.id}>{title}</li>
    ...
</ul>
- JSX => React.createElement(tag,props,children)  props是一个对象里面是属性，children是子元素，可以是文本，也可以是一个数组，也可以是一个元素
    背后document.createElement('ul')
        document.createElement('li')
            appendChild()