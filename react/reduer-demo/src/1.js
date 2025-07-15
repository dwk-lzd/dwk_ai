// 纯函数 
// 相同地的输入，一定会有相同的输出
// 没有副作用，不操作外部变量、不发送请求、不改DOM
// 管理数据状态 纯函数去管理， 全局状态更正确
// 全局状态更加重要 一堆的地方都要用到它
// 修改值， 遵循修改方法    流程
function add(a, b) {
    return a + b;
}

// 不纯的
let total = 0
function addToTotal(a) {
    total += 1;
    return total
}