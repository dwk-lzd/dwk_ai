# 全栈开发
## 表演型项目
- 前端 react 
- mockjs  前端伪接口
    /api  axios 
    
- 后端 java/node/go

## vite-plugin-mock
    - mock
    前端在后端给出真实接口前，需要mock一下，前端组件伪造接口
    - pnpm i vite-plugin-mock -D 安装插件
    - 配置vite.config.js  配置插件
    - mock 服务启动
    - /mock/test.js 根目录
        固定套路：
        export default[
            {
                url:'/api/todos',
                method:'get',
                response:()=>{
                    return{
                        code:0, // 0
                        data:todos,
                        message:'success'
                    }
                }
            }
        ]

- 前后端联调
    - 开会立项
    - 前后端 接口文档
    数据格式
    /api/todos
    [
        {
            id:"",
            title:"",
            completed:false|true
        }
    ]