# 受控组件和非受控组件

- 表单 收集用户数据
    - 受state控制
    value={state} onChange={event=>setState(event.target.value)}
    性能开销大（强大的代价）  表单的检测等，防抖节流
    - 非受控
    另外一种 收集用户输入的方法
    性能好 交互不强的