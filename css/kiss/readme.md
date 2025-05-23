# css animation

- html
    div*2
    眉毛
    嘴巴
    小酒窝
- css
    ? 在一起
    border-radius: 50%;
    animation 世界

- html结构的快捷输入方式
    div#l-ball.ball  emmet 语法  css 选择器
    .container>#l-ball.ball+#r-ball.ball（默认是div盒子 ">" 是嵌套子盒子） “#” 是id  “.” 是class
- id 唯一
- class 类名
- .container?
    盒子  实现盒子在页面居中
    水平垂直居中
- .container>#l-bal.ball+#r-ball.ball
    > 子元素选择器 + 兄弟元素选择器

- display 属性
    div block  块级元素  独占一行  可以设置宽高
    span,i a inline 行内元素  不独占一行  不可以设置宽高

    display 切换行内块的格式化上下文能力
    display: inline-block  行内块元素  在一行  可以设置宽高
    inline 行内 不可以设置宽高
    block 块级 独占一行

- 面向对象的css 
    多态
    复用  多类名 
- 定位
    - position 定位
    static 没有定位能力

    relative 相对定位
        - 子元素相对它定位
        - 相对于自身的位置定位

    absolute 绝对定位  相对于最近的定位父元素
    absolute 找到离它（管着它的）最近的position 不为static 的属性定位
    直到body为止

    .container absolute 相对于body定位