# react repos 项目开发
- https://api.github.com/users/dwk-lzd/repos
- 综合react开发全家桶、项目级别、大型的、性能

## 路由设计
    - react-router-dom
    - /repos/:username
    - /repos/:id
    - 懒加载
    hash/history
    （路由守卫）
    useParams  拿到 :username 动态路由参数
## 数据管理
    App 数据管理
    repos 
    useContext + useReducer + hooks
    createContext + reducer + useReducer
## react
    组件的粒度（足够细）
## api 
    fetch
    - axios  http请求库
    - 独立的模块，所有的请求会从组件中分离到api目录下

## 项目的目录结构，项目架构
    - api
        应用中的所有接口
    - main.jsx
        入口文件
        添加路由功能，SPA
        添加全局应用状态管理

- Repolist 功能模块
    - params 解析
        - useParams 动态参数对象
        - 不要放到useEffect 里面
        - 校验id是否存在
            不要相信用户的任何提交
        - navigate('/') 跳转到首页，并且最好放到useEffect里面
- 组件开发模式
    - UI 组件（JSX）
    - 自定义hooks useRepos 方便
    - 状态管理 应用全局 context 来管理
        - repos loading error => context value
        - useReducer    reducer 函数
    - 