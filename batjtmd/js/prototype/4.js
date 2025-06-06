function Person(name, age) {
    // this 指向当前实例化对象
    this.name = name;
    this.age = age;
    // 方法

}

Person.prototype.sayHello =
    function () {
        console.log(`Hello,my name is ${this.name}`);
    }


var hu = new Person('吉他胡', 18)
console.log(hu.__proto__);

var a = {
    name: '孔子',
    // eee: '鹅',
    country: '中国',
}
hu.__proto__ = a;  // 把a 赋值给 hu 的原型对象
console.log(hu.__proto__);
console.log(hu.country);
console.log(Person.prototype);
console.log(Person.prototype.constructor == Person);
console.log(hu.eee, hu.name);