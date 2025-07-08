## hooks todos

- 安排个css 亮点
    - stylus
        css 超集
    - 拥有vite 脚手架
        stylus 预编译 安装stylus vite 直接编译
        vite来自vue 社区
    - react 组件设计
        - 开发任务单元
        - 设计组件
            界面功能 状态 响应式
            - 新建Todos 表单
            - 修改  列表 
            - 删除
        - 按功能划分  力度
            - form
            - list 列表
                - Item 组件 有利于维护和**性能**

- 字体
    - 设置多个，设备的支持（本地包含）
    - 苹果设备  -app-system 前端负责用户体验，也是美感的一部分
- rem
    -相对单位
    - 移动端的重要单位 px 不要用了 绝对的
        移动端 宽高不定的 rem（html font-size） vw/vh(viewport), em  相对单位 
        使用相对单位，可以在所有设备上适配
        em 相对于自身的font-size 等比例

- props  组件通信
    - 传递的状态
    - 传递自定义事件
    - 直接解构
        const { // 可以添加注释
            todos, // 任务
            onAddTodo // 新增任务
        }=props 单独解构

- 数据绑定
    - 变量  可以修改值
    - 数据状态
        - Date binding **数据**绑定  jsx 就是静态的
        {} 数据绑定 
        - 数据和界面状态的统一
            - 界面是由数据驱动的
            - 数据和界面状态的一致性
        - 响应式的 

- vue 和 react 区别
    - vue 好入门，api 好用
    - react 倾向于原生JS  入门难
        - hooks？ 
    - <input v-model="text" /> vue 双向绑定
        <input value={text} onChange={()=>setText(text)}>
        react 坚持 单向绑定
