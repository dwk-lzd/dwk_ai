// add 函数， 三个参数
// add.length 3
function add(a, b, c) {
    return a + b + c;
}
add(1, 2, 3);
function curry(fn) {
    // fn 是形参 最终要执行的功能，闭包中的自由变量  词法定义环境
    // curry 函数 包装fn，慢慢收集参数
    // ...args 所有的参数 自由变量
    let judge = (...args) => {
        // es6 rest 运算符
        // 任何地方都可以访问到定义时候的fn 
        if (args.length === fn.length) {
            // 退出条件
            return fn(...args)
        }
        return (...newArgs) => judge(...args, ...newArgs);
    }
    return judge

}

// 函数柯里化  手写一个curry 函数
let addCurry = curry(add);
// 逐步地去获取函数需要地参数，当到达fn 需要地参数数量时，拿到执行结果
console.log(addCurry(1)(2)(3));
