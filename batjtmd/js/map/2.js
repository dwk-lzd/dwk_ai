// parseInt num 
['1', '2', '3'].map((num, index, arr) => {
    console.log(num, index, arr);
    return num
})

// 第二个参数是进制数
// 第三个参数传了，但是可以不用
console.log(parseInt('1', 0, ['1', '2', '3']));
console.log(parseInt('2', 1, ['1', '2', '3']));
console.log(parseInt('3', 2, ['1', '2', '3']));

