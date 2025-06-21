// 完成的功能


// es6 版本
function objectFactory(Constructor, ...args) {
    var obj = {}
    // 类数组上没有shift方法，所以需要借用数组的shift方法
    // var Constructor = [].shift.call(arguments) // 构造函数
    obj.__proto__ = Constructor.prototype // 原型链
    var ret = Constructor.apply(obj, args) // 借用apply方法，将构造函数的属性复制到obj上

    //   || 为null 的情况 仍然会返回object  构造函数 return 简单数据类型，会被忽略
    return typeof ret === 'object' ? ret || obj : obj
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    // return {
    //     name: 'name',
    //     age: 'age',
    //     label: 'haha'
    // }
    // 返回简单数据类型，会被忽略
    // return 1;
    return null
}
Person.prototype.say = function () {
    console.log(`你好，我是${this.name}`);
}

let p1 = new Person('张三', 18)
console.log(p1);
// p.say()

let p = objectFactory(Person, '张三', 18)
console.log(p);
p.say()
console.log(p instanceof Person);

// new Person(...) -> function [[constructor]] -> &&this {} -> [[call]]
// -> {}.__proto__ -> Constructor.prototype ->return {}