// 枚举类型 
const STATUS = {
    // 常量 
    READY: Symbol('ready'),// 准备好的状态
    RUNNING: Symbol('running'),// 运行中
    DONE: Symbol('done')// 完成
}
let state = STATUS.READY
if (state === STATUS.READY) {
    console.log('ready');
}