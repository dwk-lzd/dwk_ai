// 然后让局部变量可以在全局中访问
function f1() {
    // 局部变量
    var n = 999 // 自由变量
    function f2() {
        console.log(n);
    }
    return f2
}
