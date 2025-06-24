# 动画
从url 输入到页面渲染的过程

- transition 过度
- transform 变形
- animation 关键帧动画
- JS 
    - dom 对象
    - 频繁修改dom 节点的style属性
    - requestAnimationFrame 浏览器的动画API
        请求 让页面动起来 帧
        dom 动画和屏幕的刷帧率一致
        + 递归
- web 程序
    - 浏览器程序 C++写成
    - 输入是html(负责结构) css(负责样式) 
    - 输出 静态页面
    - DOMContentLoaded事件还没有完成页面渲染
    - setTimeout(()=>{},0) 会以页面渲染优先

- JS动画和css transition 动画选择哪一个
    - js 复杂
    - 性能 js 差? 不推荐这么做动画
        频繁地操作DOM js 性能开销的主要问题
        页面地重新绘制(开销也大)

    - css 简单
    - 性能好 (挺好 transform opacity)
        比JS省去了dom对象的操作
        transition 不用去不停地绘制? 真不会那么像js 一样触发那么多次的重新绘制

- DOM 树的构建
    - 字节开始 网络层的传输
    - 转换 根据编码utf-8 , html 字符串
    - 令牌化  令牌 标签名 属性 解析
    - 转成一个DOM 节点对象
        <div id='box'>
            div...
        </div>
        {
            type: 'div',
            attrs: {
                id: 'box'
                },
            children: [{

            }]
        }

    - 完成DOM 树的构建
        与树数据结构的结合,在查找和操作这块,非常的高效 作为render 的输入

- CSSOM 树的构建

- DOM树 和 CSSOM树 结合 生成 渲染树 renderTree
- layout 概念 布局 BFC 盒子模型和大小计算
    文档流的位置和大小 精确地计算在屏幕上地确切位置
    应用规则和计算过程
    平面
- 图层 z-index  离开文档流 transform opacity
    新的图层来计算 绘制 (修改的时候只需要改这一个图层)
    GPU 去计算 性能好

- paint 绘制    就像画图一样
    一个个像素点 绘制在屏幕上

- 完成第一次的绘制 
- 更新? JS,transition 
    - 修改了它的颜色 背景颜色 重新绘制 性能可以
    - 改变了它的盒子 可能会带来页面的重排 开销就大了   js   width 的改变 就拿我们的1.html 需要重排,重绘150次

- transition  left 的修改, position: absolute; 离开文档流


HTML 解析 → DOM 构建
CSS 解析 → CSSOM 构建
DOM + CSSOM → 构建 Render Tree
Layout（布局） → Paint（绘制） → Composite（合成）