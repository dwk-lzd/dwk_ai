## 盒子模型

- 文档流
    doctype
    从上到下（块），从左到右（行），  像水流一样显示页面 流体布局 
    html 标签 从外到内（层级），从上到下（盒子能力） 从左到右（布局）
- html 元素的时候，一个盒子
- 盒子，页面的占位就清楚了。
    - 盒子的尺寸 由哪些部分构成
        - 里面的内容 width * height
        - 内边距 padding
        - 边框 border
        - 外边距 margin 

- 页面怎么显示的？
    将元素和css结合，了解它作为一个盒子在文档流中的大小和位置
    - 盒子模型 = 内容 + 内边距 + 边框 + 外边距？
        2种算法 
        box-sizing: content-box; 标准盒子模型

        box-sizing: border-box; 怪异盒子模型  盒子的border和padding会包括在width和height里面

- 布局 
    多列式

- 页面的显示 = 文档流 + 页面布局（弹性、浮动···） + 盒模型（标准，怪异）+ 离开文挡流（position:absolute）

- 居中 
    left: 50%; top: 50%; transform: translate(-50%, -50%); 或者margin-left:-盒子一半宽度， margin-top:-盒子一半高度绝对定位

- 父元素采用flex布局  子元素用flex:1; 撑开父元素
    flex-direction: column;  子元素垂直 撑开父元素
    flex-direction: row;默认  子元素水平 撑开父元素
    