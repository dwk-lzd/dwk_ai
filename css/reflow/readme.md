# 回流重绘
- 布局难点 列式布局和理解BFC/FFC
    - html 根元素 最外层的第一个BFC 元素
        Block Formatting Content  块级从上到下，行内从左到右， BFC 格式化上下文
        有了文档流
    - float overflow: hidden  flex
    - 有没有什么标签 可以做列式布局？
    tr td
    - 为什么不用
        - 触发太多的回流重绘
        - 语义不和 table数据表
        tr  row
        td  column
        - 不够灵活

## 回流和重绘
- 回流 也叫做重排 reflow
    当RenderTree 中部分或全部元素的尺寸，结构、或某些属性的读取发生改变时，浏览器重新渲染部分或全部文档的过程叫回流.
    table 不适合,table中布局的改变，会触发整个table 的回流重排
    就像火烧赤壁 
    display: none 不参与回流重绘 性能优化的一种方案
    - 触发回流（重排）的方式
    1.页面首次渲染 严格意义上不是， 说算指的是页面 从0到1  最耗时的  网页每慢0.1s 少1000万收入  让用户爽（所有影响页面加载的都让道，这也是js写在body的原因）
    2.浏览器窗口大小改变
    3.元素尺寸或位置发生改变 （transition，transform/opacity 新图层除外）
    4.元素内容的变化 
        appendChild  removeChild  
    5.display:none block
    6.字体大小的改变
    7.激活css伪类 :hover :active
        如果只是改变了color呢？ 也会触发回流  浏览器需要重新计算元素的样式和布局
    8.查询某些属性或调用某些方法时
        - img.getBoundingClientRect() 触发回流

- 重绘 repaint
    当页面元素样式的改变并不影响它在文档流中的位置例如：
    color background-color  visibility hidden show（仍然占据文档流） display none 

## 页面怎么渲染的？
- 输入url
- 下载html 
    - 下载字节
    - html 字符  utf-8 编码
    - 解析html 根据开关标签 属性...  
    - 节点对象
    - 构建DOM树 （DOM树 节点）
- link  css  下载css
    - 下载字节码    Content-Type text/html  text/css
    - 编码 utf-8  得到css文本
    - token  词法分析  
    - css  rule  节点
    - cssOM 树
- DOM树 和 cssOM 树 合并 渲染树（RenderTree）

- Layout树
    布局，盒模型，大小 确定元素在文档流中的位置和大小
- 图层
    - z-index  
    - position:fixed  弹窗
    - transtion + transform / opacity
    - animation
    - translate(50%,50%,50%)  3D  GPU 加速
    1个图层 主要文档流图层 = DOM树 + CSSOM->RenderTree  <-> LayoutTree 
    2个图层 = DOM树 + CSSOM->RenderTree  <-> LayoutTree 
    ....
    - 图层的合并 
    - 浏览器的渲染引擎 绘制平面 像素点绘制
