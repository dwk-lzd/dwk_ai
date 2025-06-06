// 没有class 的js 如何在苦苦追求OOP 面向对象的编程 
// 函数首字母大写 约定 类的概念
// 构造函数
function Person(name, age) {
    // this 指向当前实例化对象
    this.name = name;
    this.age = age;
    // 方法

}
// 函数对象  原型对象
// 类的方法
Person.prototype = {
    sayHello: function () {
        console.log(`Hello,my name is ${this.name}`);
    }
}
// new 一下 实例化对象
// new 运行构造函数

const p1 = new Person('吉他胡', 18)
// 原型
console.log(p1.__proto__.__proto__);
let o = { a: 1 }
console.log(o.__proto__);
console.log(o.toString());


