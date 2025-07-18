// 如何遍历数组
// - for(let i=0;i<arr.length;i++) 计算循环 性能好  可读性不好  不是人脑,是电脑
// - while()
// - forEach 
// -map filter find some every ...
// for of

const names = Array.of('Alice', 'Bob', 'Charlie', 'David')
console.log(names);
names.forEach(name => {
    if (name === 'Charlie') {
        console.log('Charlie is here,stop...');
        // break // 报错  forEach不能在回调函数中使用break continue return
        return
    }
    console.log('Processing:', name);

})
