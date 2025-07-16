# 单例模式

## 实现Storage，使得该对象为**单例**，基于localStorage 进行封装。实现方法
setItem(key, item) // 存储值 和 getItem(key) // 获取值 两个方法。

- 分析题目
实现Storage 类
- 设计模式 design pattern
- 封装 
    getItem
    setItem

## 单例
单例是一种设计模式，（static getInstance），高级程序的交流语言
一个类只能实例化一次
- static 属性 instance 持有唯一的一次实例
- static getInstance 判断instance 是否存在，不存在就实例化，存在就返回instance
    实例的时候一定要这样做（Storage.getInstace()）， 不能直接 new Storage() 
- 性能特别好， 好管理

# 单例模式

    - 实现一个登录弹窗
    - 体验
    不用跳转路由，盖在页面上
    z-index display none|block
    - 性能
    90% 用户 不登录
    Modal html css js 比较多
    把加载和使用推迟到第一次用的时候, 单例
    复用