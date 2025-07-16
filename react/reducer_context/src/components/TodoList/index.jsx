import {
    useTodoContext
} from '../../hooks/useTodoContext'

export default function TodoList() {
    const {
        todos,
        removeTodo,
        toggleTodo } = useTodoContext()
    return (
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() => toggleTodo(todo.id)} // 跨层级
                        />
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)}>remove</button>
                    </li>
                ))
            }
        </ul>
    )
}