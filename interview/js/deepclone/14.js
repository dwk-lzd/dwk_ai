const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    field5: [1, 2, 3]
}
target.target = target  // 循环引用问题 需要解决循环引用问题 
// es6 的新数据类型hash Map()
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {}
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(target, cloneTarget)
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map)
        }
        return cloneTarget;
    } else {
        return target
    }
}
// 会出现栈溢出问题
console.log(clone(target));
