import {
    NextResponse // 相当于res
} from 'next/server'  // api server

// ts 是js 的超集
import { type Todo } from '@/app/types/todo'

let todos: Todo[] = [
    {
        id: 1,
        title: '去广州',
        completed: false
    },
    {
        id: 2,
        title: '小蛮腰',
        completed: false
    }
]
// Restful  一切皆资源
// 向用户暴露资源的
// method + 资源 URL定义规则
export async function GET() {
    return NextResponse.json(todos)
}

export async function POST(request: Request) {
    // 获取请求体 body json
    const data = await request.json()
    // 核心的数据，函数的参数，返回值
    const newTodo = {
        id: + Date.now(),
        title: data.title,

        // typeScript 除了强类型外，代码提示更好，写起来更快
        completed: false
    }
    todos.push(newTodo)
    return NextResponse.json(newTodo)
}

export async function PUT(request: Request) {
    const data = await request.json()
    todos = todos.map(todo => todo.id === data.id ? { ...todo, completed: data.completed } : todo)
    return NextResponse.json(todos)
}

export async function DELETE(request: Request) {
    const data = await request.json()
    todos = todos.filter(todo => todo.id !== data.id)
    return NextResponse.json(todos)
}
