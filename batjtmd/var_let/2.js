// 一句代码
// v8 引擎
// 变量提升
// 编译阶段
// 执行阶段
// 全局作用域的变量
// window？前端方式来运行会把变量放到window上
var a = 1;
// console.log(window.a);// ReferenceError: window is not defined 因为在后端运行，没有window
console.log(global.a); // global 是 node 里面的顶层对象

