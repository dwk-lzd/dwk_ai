import {
    useState,
    useEffect
} from "react"

export const useTodos = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))

    useEffect(() => {
        // console.log('////');
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (text) => {
        // setTodos
        // 数据状态时对象的时候
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                isComplete: false
            }
        ])
    }
    const onToggle = (id) => {
        // todos 数组找到id 为id，isCompleted !isComplete
        // 响应式？返回一个全新的todos map
        setTodos(todos.map(
            todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ))
    }

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    return {
        todos,
        setTodos,
        addTodo,
        onToggle,
        onDelete
    }
}

