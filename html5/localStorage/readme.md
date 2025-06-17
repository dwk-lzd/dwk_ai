# localStorage

- 全局安装stylus
    - npm install -g stylus
    - stylus --version
- stylus 何物？
    - 是一个css预处理器
    - 更快，更专业
    - .styl 后缀文件
    - 编译成css

- stylus 是css 的超集
    但是浏览器只认css 需要编译成css
    stylus common.styl -o common.css 编译成css文件
    stylus -w common.styl -o common.css 监听文件变化 编译成css文件
    - box-shadow 添加盒子的立体感觉
- css 有些属性直接继承
    每个都要写一遍，无法接受
    默认16px 颜色黑色
    body color 子元素会继承
    有些也不会继承

- box-shadow: [inset] offsetX offsetY blurRadius spreadRadius color;
    值	            含义	            是否可选
    inset	        内阴影（默认是外阴影）	 ✅ 可选
    offsetX	        水平偏移量	             ❗ 必填
    offsetY	        垂直偏移量	             ❗ 必填
    blurRadius	    模糊半径	             ✅ 可选，默认 0
    spreadRadius	扩展半径（阴影扩大/缩小）	✅ 可选，默认 0
    color	        阴影颜色	             ✅ 可选，默认黑色

- background-size: cover; 等比例缩放，裁剪，不留空白 重点在盒子
- background-size: contain; 等比例缩放，不裁剪，留白 重点在背景 完整显示图片
- background: url("http://wes.io/hx9M/oh-la-la.jpg") center no-repeat; 背景图片居中，不重复

- stylus 让css 如js一样
    - 模块特性
    tap 缩进 自动补全css 前缀
    模块和作用域的概念

viewport user-scalable=no 它指示浏览器不允许用户通过缩放来改变页面的显示比例，确保网页在移动设备上以设计师或开发者设定的最佳视图展示，保持布局的一致性和设计意图的完整性