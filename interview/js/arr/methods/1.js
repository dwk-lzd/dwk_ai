const arr = [1, 2, 3, 4, 5]
// const remove = arr.splice(2, 2)
// console.log(remove);
// console.log(arr);
// // 如果不修改呢？移除但又不修改原数组 splice 不能用
// slice 不修改数组，截取部分
const newArr = arr.slice(0, 2).concat(arr.slice(4))
console.log(newArr, arr);