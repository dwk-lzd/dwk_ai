// 红绿灯

// - 同步阻塞
// sleep 函数
// - 显示时间
// - 轮询

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

(async () => {
    console.log('begin');
    await sleep(2000)
    console.log('end');
})()

