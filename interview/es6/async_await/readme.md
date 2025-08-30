# async await 是声明，如何实现

它是es2017引入的异步编程语法糖，让异步代码写起来像同步，解决了
then链式调用很麻烦的问题

- async/await 组合使用
- async 声明的函数一定返回严格Promise
- await 会暂停async 函数的执行，等待右侧的Promise 解决后继续
- 本质还是异步的，后面的代码封装到promise 的then 里面

- 本质上，async/await 是对Promise + Generator 的封装
    generator 思想很好， * 区别于普通函数，yield 暂停执行
    运行得到严格生产器迭代对象 next() 拿到value 和 done状态
    太复杂了
    async 函数内部会被编译成一个状态机（等待？完成？）
- async/await 简单优雅，但不能滥用，并发的用promise.all