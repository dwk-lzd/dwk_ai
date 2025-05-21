//全局的 js 代码在执行之前会有一个编译
//变量提升
console.log(value, '------------');

var a;
a = 1;
if (false) {
    var value = 1;//声明变量 =1 这是在执行阶段，变量声明会被提升到函数或全局的顶部，但赋值不会
}
// undefined 有 
console.log(value);