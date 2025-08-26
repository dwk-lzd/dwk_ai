# 数组上的方法

## 分维度来归类，带上业务场景

- 是否修改源数组，非纯函数，有副作用, 要慎用
    push/pop/shift/unshift 栈/队列操作
    shift/unshift 性能差，移动元素（数组是连续的）

    splice(删除/插入/替换元素)
    splice(start, deleteCount, item1, item2, ...itemN)
    sort 排序
    reverse 反转
- 不会修改原数组的方法， 纯函数， 推荐多用
    - forEach  无返回
    - map 返回新数组
    - 查找类
        es5 提供了 indexOf，lastIndexOf
        es6 提供了 find 查找满足条件的第一个元素
        findIndex 查找满足条件的元素 第一个元素的索引
        includes 查找是否包含某个元素
        在最近的新版本里 es15 提供了 findLastIndex 
        
        JavaScript 是基于ECMAScript 脚本标准开发的
        ES5 兼容性好
        ES6 新特性
        ES6+ 对新特性持续关注
        
    - 过滤和判定
        filter 
        every 所有都满足条件
        some 至少有一个满足条件
        any 别名 some
    - 拼接/裁剪
        concat slice
    - 扁平
        flat
    - 迭代器 iterable
        keys() values() entries()
    - join/toString() 拼接
    - 归约
        reduce  相加
    - 静态方法
        Array.isArray
        Array.from
        Array.of

- es6 新增方法
- 遍历/查找类/转换类/拼接类/统计类