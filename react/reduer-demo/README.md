# reducer

- 聊聊组件通信
    单向数据流 
    - 父子组件通信-porps
    - 子父组件通信-自定义事件props传递
    - 兄弟组件通信 通过父组件中转
    跨层级 全局通信
    - useContext   +  useReducer
    - redux 

- useContext + createContext 打理复杂的全局跨层级别共享
    显得力不从心  需要不断地嵌套<Provider>
- useReducer 帮我们解决全局状态**管理**
    - 就像俄罗斯套娃
    - 多状态
    - 公司一样 制定一个制度 
        - 单纯 reducer  纯函数
- 纯函数和规定

## useReducer
- useState 响应式状态 
- 响应式状态管理
    上手段