# 智能前端之单词学习
- 产品和商业模式
    - 学单词 
    - 拍照记单词
        - 图片交给多模态模型 word
        - 交给deepseek aigc 生成例句
        - tts 发音 
- focus
    拍照背单词，用单词
- 解决一些特定的效率型、创新型App

- npm init vite
    vite 是工程化脚手架，构建工具
- npm i 有点慢
    需要装一些 react ... 项目依赖
    查看当前的npm源地址：npm config get registry
    将npm的registry地址配置为阿里云提供的镜像源：npm config set registry https://registry.npmmirror.com

    pnpm 代替 npm （在不同的项目中 重复去安装了react）
    react 等包放到一个地方，之前安装过，链接过来用，只需要安装一次
    npm install -g pnpm 

## react 语法
- 单向数据流
    数据状态流动
    - 父组件负责提供数据，和api 接口请求
    - 拆成多个子组件
    - 数据会从父组件流向子组件
    - 子组件负责消费数据 专注于显示
    - props
        <PictureCard
            uploadImage={uploadImage}
        />
        像函数参数一样，可以解构

## 项目中一定要安排的技能点
- pnpm 更快的包管理工具
- react 思想
    - 数据状态 useState 
    - 数据驱动 
    - 响应式  数据状态发生变化，视图会自动更新
        - 不用频繁操作DOM，只需要关注业务
- 业务
    - 图片上传
        - 图片预览
- 组件化设计 
    - App
        - 提供数据
        - 图片上传大模型
    - PictureCard
        单向数据流
        - 子组件只负责消费数据
        - 父组件负责提供数据，数据的请求
        - 先要把我们获取的图片base64 数据传给父组件
- 性能优化
    - linear-gradient 代替图片做背景
- 用户体验
    - 上传图片的功能，预览功能
    - 无障碍访问
        label for + input#id
- es6 新特性
    - 可选链操作符 ?.
- html5 功能
    - file 文件对象
- 智能
    - 多模态模型
       怎么实现呢？   月之暗面 base64 
       我们应该怎么构建prompt？
       - prompt 设计原则
        - 给他有关明确的身份 LLM交流 把大模型当助理
        - 清晰且具体的任务
        - 限制，指定结果
            返回的结构 JSON
            有利于接下来的业务执行
            拿着大模型的回答，接着干活
            JSON 最好的接口格式
        - 分布做

## 前端为什么要搞AI
- 时代的需求和趋势
- vibe coding 提升了开发效率 trae cursor
- LLM的发展，产品需要更多更好的智能体验
    用户体验是前端的职责，智能前端工程师的新角色中

