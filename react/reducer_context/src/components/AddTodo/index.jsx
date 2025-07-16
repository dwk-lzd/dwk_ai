import { use } from 'react'
import {
    useState, // 私有状态
} from 'react'
import { useTodoContext } from '../../hooks/useTodoContext'

export default function AddTodo() {
    const [text, setText] = useState('')
    const { addTodo } = useTodoContext() //跨层级
    const handleSubmit = (e) => {
        e.preventDefault()
        // 全局管理
        if (text.trim()) {
            addTodo(text.trim())
            setText('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}