# BFC

- 在弹性布局之前，我们一般用float 做两列式、三列式或多列式布局
    - 业务场景 
    - float 让元素左浮动，右浮动 简单就能两列式布局
    - 都向左浮动 就形成了多列式 
    - 浮动元素会离开文档流，但和定位离开文档流不一样 浮动离开文档流不彻底
        文字围绕它浮动
    - 外层盒子里面使用 overflow: hidden 可以解决
        触发生成一个BFC （Block Formating Context）
        块级格式化上下文
        .container 原来是一个block 块级盒子
        升级为BFC 盒子  不再是一个普通盒子
        FC formating context 
        flex 子元素会在一起
        全新的渲染区域，不受外界支配
        在 flex 里面 是FFC （Flex Formating Context）
- html 是最外层，第一个BFC 盒子
    - 为什么块级元素是从上到下排列
    - 行内元素是从左到右排列
- BFC 元素 可以拿到浮动元素的高度
    计算BFC的高度时，浮动元素也参与计算