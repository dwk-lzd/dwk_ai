# 封装的JSONP

- 只能解决GET请求的跨域问题
    http://localhost:3000/say?callback=biaoabiCallback&wd=ilikeyou
- 需要后端配合
    后端输出的方式要加padding
- 不太安全
    全局挂载了有个show callback 函数  容易被黑客利用