// 全局对象，指向下一个要处理的单元(即一个fiber节点)
// fiber 对象 链表
// 全局任务对象，一个要处理的任务单元(即一个fiber节点) 基于虚拟dom节点
let nextUnitOfWork = null

function performaUnitOfWork(fiber) {
    if (!fiber.dom) {
        fiber.dom = createDom(fiber)
    }

    const elements = fiber.props.children
    let index = 0
    let prevSibling = null // 上一个兄弟节点

    while (index < elements.length) {
        const element = elements[index]
        const newFiber = {
            type: element.type,
            props: element.props,
            parent: fiber,
            dom: null,
            child: null,
            sibling: null,
        }
        if (index === 0) {
            fiber.child = newFiber
        } else {
            prevSibling.sibling = newFiber
        }
        prevSibling = newFiber
        index++

        if (fiber.child) {
            return fiber.child
        }

        // 如果没有子节点，找兄弟节点
        let next = fiber
        while (next) {
            if (next.sibling) {
                return next.sibling
            }
            next = next.parent

        }
    }
    return null
}


function workLoop(deadline) {
    let shouldYield = false
    while (nextUnitOfWork && !shouldYield) {
        // 指针的操作
        nextUnitOfWork = performaUnitOfWork(nextUnitOfWork)
        // 如果任务时间小于1ms，停止指向，避免阻塞渲染
        shouldYield = deadline.timeRemaining() < 1
    }
}
// 浏览器 空闲时 调用，模拟实现，schedule 任务调度机制
requestIdleCallback(workLoop)