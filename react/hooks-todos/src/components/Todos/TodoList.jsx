import TodoItem from "./TodoItem"
const TodoList = (props) => {
    const {
        Todos,
        onToggle,
        onDelete
    } = props
    return (
        <ul className="todo-list">
            {/* TodoList */}
            {
                Todos.length > 0 ? (
                    Todos.map((todo) => {
                        return (<TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={() => onToggle(todo.id)}
                            onDelete={() => onDelete(todo.id)}
                        />)
                    })
                ) : (
                    <p>暂无代办事项</p>
                )
            }
            {/* <TodoItem /> */}
        </ul>
    )
}
export default TodoList