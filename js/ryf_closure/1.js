// 作用域
// 作用域链 内部的可以访问外部（变量查找的路径）
// 函数外部无法读取函数内的局部变量？
// 1. 全局作用域
var n = 999

function f1() {
    // 没有使用var， 相当于声明全局变量，不建议使用
    b = 123
    // 2. 函数作用域
    {
        // 3. 块级作用域(ES6新增)
        let a = 1
    }
    console.log(n);
}
f1()
console.log(b);