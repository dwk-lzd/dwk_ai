# 手写call

- 手动指定函数内部的this
- 参数 一个个 apply []
- 第一个参数是null 或者 undefine this指向哪？
    严格模式下报错，非严格模式下指向window
- call 、bind和apply 应用场景的区别
    - call apply 都是立即执行的，区别是参数的传递方式不同，可以互换使用
    - bind 延迟执行，返回一个新函数，需要手动调用

## 手写call
- call是属于所有函数的,Function 原型链上的方法
    gretting.call()

## 手写call包含的技能点
- 原型 Function
- 函数参数的理解
    context，rest 运算符
- context 为空，null，undefined -》 window
- 在context 上挂载方法，轻松实习函数内部的this 指向 context
    JS的动态性 因为挂载方法是污染了我们的context的
    es6 symbol 解决了唯一值的问题 防止我们context原有的属性被覆盖
    delete context上的方法，
- return返回值