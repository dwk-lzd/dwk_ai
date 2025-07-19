- JSX？
    - JSX 不能独立运行
    - vite 工程化
        jsx -> React.createElement
    - React 环境中

- babel
    Make JavaScript Great again
    大胆使用JS 最新语法，不用等待
    es6 promise -> es8 async await
    let ->var
    ()=>{} -> function(){}

    npm init -y

    pnpm i @babel/cli @babel/core -D
    pnpm i @babel/preset-env -D  // 预es6处理规则
    ./node_modules/.bin/babel 1.js -o 2.js

    pnpm i @babel/preset-react -D  // 预react处理规则
    ./node_modules/.bin/babel 1.jsx -o 2.jsx

- 编译流程
    - pnpm i @babel/cli @babel/core -D    // -D 开发期间的依赖
        @babel/cli  babel 命令行工具
        @babel/core  babel 核心工程  
        babel  负责JS 转码
        -D  开发阶段的依赖  dev
        上线后是不用的
    - ./node_modules/.bin/babel
        转换的规则
        react -> IOS 代码
        es6 -> es5
        JSX -》 React.createElement