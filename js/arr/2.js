// fill 一样的
// Array.of()上场了
// Array,静态方法
console.log(Array.of(1, 2, 3));  // 不同值的初始化需求
// 复杂的计算或转变
console.log(Array.from(new Array(26),
    (val, index) => String.fromCodePoint(65 + index)
));
