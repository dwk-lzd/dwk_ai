// object.defineProperty
var object = {} // 对象

// es5提供的API
// react 和 vue 最新版 对浏览器有要求
Object.defineProperty(object, 'num', {
    value: 1,
    // 属性描述
    configurable: true,
    writable: false,
    enumerable: false,
    // get: function () {
    //     console.log('读取了属性');
    //     return 1
    // }
})
// object.num = 2
// console.log(object.num);
// delete object.num
// console.log(object.num);
for (let key in object) {
    console.log(`${key} : ${object[key]}`);
}

console.log(Object.getOwnPropertyDescriptor(object, 'num'));
Object.defineProperty(object, 'name', {
    writable: true,
})

object.name = 'hxt'
console.log(object.name);
console.log(Object.getOwnPropertyDescriptor(object, 'name'));

for (let key in object) {
    console.log(key, object[key]);
}