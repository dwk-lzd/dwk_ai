- CSR（客户端渲染） SPA  SEO 不好  #root
    移动端时代，流量入口不再是百度，而是移动由于市场
    Web App  体验好

- SSR （服务端渲染）
    组件在服务器端渲染 
    页面渲染更快 SEO好
    Web Site
    AI Web Site 在Google/Baidu 打榜的
    AI 出海

- shadcn-ui
    - react-vant  组件库安装完后项目就变慢了
        需要按需加载  路由懒加载一样
    - shadcn-ui  更现代的前端框架
    npx shadcn@latest add button input card
        直接是懒加载
        - base color  主题风格
    - 用到的组件时按需安装的
        init
        add

- next.js 约定熟成
    - app
        可以不需要src 
        app 应用目录
        - 目录即路由
            AppRouter
            repos/page.tsx

    - api
        后端接口定义
RESTful 是一种基于 HTTP 协议设计的软件架构风格，后端通过定义资源的 URI，
利用 HTTP 动词（如 GET、POST、PUT、DELETE）对资源进行操作，实现前后端分离和接口的统一化管理。

- Approuter
    自动配置路由，文件夹就是路由
- layout
    布局