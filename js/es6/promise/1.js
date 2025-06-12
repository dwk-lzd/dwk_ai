// 读取1.html 里面的内容
// 读取完后打印 读完了
const fs = require('fs') // 引入js 内置的文件模块
const readFilePromise = new Promise((resolve) => {
    fs.readFile('./1.html', (err, data) => {
        console.log(data.toString()); // 读取到的内容是一个buffer 二进制 需要转化成字符串
        resolve()
    })
})

readFilePromise.then(() => {
    // 读取完了之后的操作
    // resolve 就会执行这里的代码
    console.log('读完了');
})
