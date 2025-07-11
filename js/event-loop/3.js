console.log('Start');
// node 微任务
// process 进程对象 
process.nextTick(() => {
    console.log('Process Next Tick');
})
Promise.resolve().then(() => {
    console.log('Promise Resolved');
})
setTimeout(() => {
    console.log('haha');
    Promise.resolve().then(() => {
        console.log('inner promise');
    })
}, 0)
console.log('end');

