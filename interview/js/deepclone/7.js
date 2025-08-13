// # 怎么用的
// 默认值，用户会传的， Object.assign() 收入囊中
// 合并用户传参和默认参数
// Option shi 传入的对象
// 目标对象时{}空对象，合并用户传参和默认参数，合并配置对象
function createUser(options) {
    const defaults = {
        name: '匿名用户',
        age: 18,
        isAdmin: false
    }

    const config = Object.assign({}, defaults, options)
    console.log(config);
}

createUser({ name: '李四', age: 25 })

const baseConfig = { api: '/api', timeput: 500 }
const envConfig = { timeput: 10000, debug: true }
const finalConfig = Object.assign(
    {},
    baseConfig,
    envConfig
)