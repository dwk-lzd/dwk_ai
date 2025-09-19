// 一堆任务
// 顺序插入 results []
// deps 
async function runTasks(tasks) {
    // 便于查找task  id  找到task  deps,HashMap
    // 数组作为实例化，第一项key
    const taskMap = new Map(tasks.map(t => [t.id, t]))
    // console.log(taskMap);
    const indegress = new Map(tasks.map(t => [t.id, t.deps.length]))
    const results = {}
    let ready = tasks.filter(t => t.deps.length === 0).map(t => t.id)
    // console.log(ready);
    async function run(id) {
        const task = taskMap.get(id)  // 获取任务
        const output = await task.run()
        results[id] = output

        for (const [tid, t] of taskMap) {
            if (t.deps.includes(id)) {
                indegress.set(tid, indegress.get(tid) - 1)
                if (indegress.get(tid) === 0) {
                    ready.push(tid)
                }
            }
        }
    }
    while (ready.length) {
        // 取出当前可执行的任务
        // 浅拷贝
        const currentBath = [...ready]  // 因为ready是动态变化的，相等是引用式的，所以要先复制一份
        ready = []
        await Promise.all(currentBath.map(run))

    }
    return results

}

const tasks = [
    {
        id: 'A',
        run: () => new Promise(res => setTimeout(() => {
            res('A done')
        }, 5000)),
        deps: []
    },
    {
        id: 'B',
        run: () => Promise.resolve('B done'),
        deps: ['A']
    },
    {
        id: 'C',
        run: () => Promise.resolve('C done'),
        deps: ['A']
    },
    {
        id: 'D',
        run: () => Promise.resolve('D done'),
        deps: ['B', 'C']
    },
]

runTasks(tasks).then(res => console.log(res))