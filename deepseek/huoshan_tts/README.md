# 智能前端之语言
- AI时代新的交互体验，语音交互
    虚拟数字人 AIGC 文字 -> 语音

- 敏感信息怎么保护？
    .gitignore  说明哪些文件不用提交到远程 仓库也不进入
    node_modules/ 依赖包  太大了  而且没有必要提交 nmp install 直接可以安装依赖包


- 环境变量
    .env.local  . 开头 本地项目需要的一些key
    添加到.gitignore 里面， 

- 单向数据流
    input value {prompt}
    保持数据状态和界面的统一
    UI = f(state)  state 驱动页面
    onChange 修改

- base64 格式