# stylus

- stylus 让css更像编程
    - 模块化
- margin 0 auto 水平居中
- line-height 1.6 行高为字体大小的1.6倍
- 文字垂直居中 
    - 行高等于高度

- transition all .3s ease 检测所有属性的变化，过渡时间0.3s，变化
    值	        描述
    ease	    默认，慢快慢（先慢再快再慢）
    linear	    匀速
    ease-in	    入场慢
    ease-out	出场慢
    ease-in-out	进出都慢

- transform 变形
    函数	            描述
    translate(x, y)	    水平和垂直移动（位移）
    translateX(x)	    水平方向移动
    translateY(y)	    垂直方向移动
    scale(sx, sy)	    缩放元素（sx: 横向，sy: 纵向）
    scaleX(sx)	        横向缩放
    scaleY(sy)	        纵向缩放
    rotate(angle)	    旋转（单位：deg）
    skew(ax, ay)	    倾斜（扭曲）
    skewX(ax)	        横向倾斜
    skewY(ay)	        纵向倾斜

方式ease
- 伪元素
    不需要在html中声明
    在css 中使用类似伪类的::before
    ::after
    选中元素内容开始之前
    内容结束之后
    可以像元素**标签**一样出现在**DOM树中**文档流之中，但是又不是标签
    伪元素 依赖css
    下划线，向右点进去的箭头
    好处：不用写标签，就可以完成界面效果
    content 必须有 表示伪元素里面的内容，一般为空
    伪元素	        描述
    ::before	    在元素内容前插入内容
    ::after	        在元素内容后插入内容
    ::first-line	选取文本块的第一行
    ::first-letter	选取文本块的第一个字母
    ::selection	    用户选中部分的内容样式
    ::placeholder	输入框中的占位符文字样式