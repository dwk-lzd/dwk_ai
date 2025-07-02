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
    - PictureCard
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


