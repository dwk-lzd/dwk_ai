# css 基础

- 一个属性与值得键值对称为声明 declearation
- 一个声明块{} 中可以包含多个声明
- 选择器 声明块作用得选择器选中的对应元素
- ruleset  多个 
- css层叠样式表

## css 选择器
+ h1+p 选择后面相邻兄弟p元素
~ h1~p 选择后面所有连续同级兄弟p元素
> 选择父元素的直接子元素

伪类选择器 选择处于的特定状态下的元素
CSS伪类用于定义元素特殊状态，如:hover、:active :focus、selection、checked等
行为伪类 状态伪类 结构伪类 条件伪类

// 序号
结构伪类
.container p:nth-child(3) 选择.container 里面的第三个元素，并且这个元素必须是p元素

.container 里面的第三个p元素 
.container p:nth-of-type(3) 选择.container 里面的第三个p元素，（假如里面由三个p元素）