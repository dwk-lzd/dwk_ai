// {} key:value O(1)时间复杂度 HashMap  Map
// 第一种重要数据结构  链表 队列 栈
// 长度的限定 类型
// js可以限定, 但是可以动态自动扩容的 
// fill 是需要new Array实例化的,属于原型上的方法
const arr = [1, 2, 3]
const arr2 = new Array(5).fill(undefined)
console.log(arr2);
arr2[8] = undefined
console.log(arr2);
for (let key in arr2) {
    console.log(key, arr2[key]);
}
for (let key of arr2) {
    console.log(arr2[key]);
}
