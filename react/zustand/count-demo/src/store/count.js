// zustand react 状态管理框架
import {
    create  // 创建一个store，存状态的地方
} from 'zustand'

// count store
// use 开头  hook
export const useCountstore = create((set) => ({
    // 返回对象，用括号括起来，避免冲突
    // 状态
    // 修改状态的方法
    count: 0,
    // reducer 函数 规定状态怎么变
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 }))
}))