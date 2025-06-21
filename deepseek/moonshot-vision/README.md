#  智能前端之图片识别

- StrictModel react 默认启动的严格模式
    执行一次，测试一次 所以有时候可以看到两次执行结果
- 良好的编程风格
    移除不需要的代码 
- 什么是import.meta.env.VITE_API_KEY 环境变量
    代码运行时可以和环境变量交互
    把env 写到代码里面，所以我们写到.env.local 里面 再通过import.meta.env 读取
- async await 异步编程 
    then 
    异步
    流程控制
    await 比 then 更同步化 更简洁
- class是js 关键字
    - react JSX 运行，以原生JS 来运行
    所以我们用className 来代替class
- accept='.jpeg,.jpg,.png,.gif' 限制上传文件类型

- 无障碍访问
    <label htmlFor='fileInput'>文件：</label> htmlFor 实现无障碍访问 
    当用户点击label 时，会自动触发 id 为fileInput 的input元素的点击事件
- hook 函数
    useState 是react 内置的hook（钩子）函数 快速地解决一些问题 响应式的数据状态
    useRef DOM 等对象地绑定
- user-scolable=no 禁止缩放 增加用户的体验

- 本地预览 preview
    - 良好切必须的用户体验，实时地告知用户再发生什么
    - 图片上传及处理挺慢地，所以需要preview
    - onChange
        e.target.files[0] 拿到文件对象
        - FileReader 读取文件对象
        - 调用readAsDataURL 方法，读取文件内容
            - data？base64 数据
            - base64 可以直接作为img src

- 静态的html -> 动态模板 （{data}） -> 状态 State useState