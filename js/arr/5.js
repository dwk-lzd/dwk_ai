// 消灭数组,留下一个
// reduce 函数 负责在繁杂的case下 只有唯一的对的状态产生
// 新的状态基于上一个状态
console.log([1, 2, 3, 4, 5, 6].reduce((pre, cur) => {
    return pre + cur
}, 0));
