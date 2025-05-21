showName()//驼峰式命名
console.log(myName);

var myName = '帅哥'//声明变量在编译阶段，赋值是在执行阶段做的，所以是undefined
function showName() {
    let b = 2;//在函数作用域中，执行后声明
    console.log(myName);

    console.log('函数执行了');

}