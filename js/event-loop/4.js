console.log('同步Start');
const promise1 = Promise.resolve('First Promise');
const promise2 = Promise.resolve('Second Promise');
const pormise3 = new Promise(resolve => {
    // 同步的，所以先打印promise3，然后打印同步End
    // 只有.then()才是异步的，是微任务
    console.log('promise3');
    resolve('Third Promise');
})

promise1.then(value => {
    console.log(value);
})
promise2.then(value => {
    console.log(value);
})
pormise3.then(value => {
    console.log(value);

})
setTimeout(() => {
    console.log('下一个宏任务');
    const promise4 = Promise.resolve('Fourth Promise');
    promise4.then(value => {
        console.log(value);
    })
}, 0)
setTimeout(() => {
    console.log('下下一个宏任务');
}, 0)

console.log('同步End');
