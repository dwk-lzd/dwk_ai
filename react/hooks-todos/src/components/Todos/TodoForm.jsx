import {
    useState // 私有状态
} from 'react'
const TodoForm = ({ onAddTodo }) => {
    // props 和 state 都是数据
    // props 参数数据
    // state 私有的数据
    // 单向数据流 
    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        let result = text.trim() // try don't repeat yourself
        if (!result) return
        onAddTodo(result)
        setText('') // 清空输入框  数据状态和界面状态一致要敏感
    }
    // JSX 一定得有唯一得最外层元素 树来编译JSX
    return (
        <>
            <h1 className="header">TodoList</h1>
            <form className='todo-input' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={text} // 数据绑定
                    onChange={e => setText(e.target.value)} // 事件 维护数据值跟input输入框保持同步一致
                    placeholder='Todo text'
                    required
                />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}
export default TodoForm