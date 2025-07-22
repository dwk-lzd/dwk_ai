import {
    useTodosStore
} from '../../store/todos'

const TodoList = () => {
    const {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
    } = useTodosStore()
    return (
        <>
            <ul>

                {todos.map(todo => (
                    <div key={todo.id}>

                        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                            {todo.text}
                            <button onClick={() => deleteTodo(todo.id)}>删除</button>
                        </li>
                    </div>
                ))}
            </ul >
        </>
    )
}
export default TodoList