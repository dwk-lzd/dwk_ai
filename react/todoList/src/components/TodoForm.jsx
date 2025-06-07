import { useState } from "react";
function TodoForm(props) {
    // 表单提交事件
    const onAdd = props.onAdd;
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        // 阻止表单默认提交行为
        // 由JS 来控制
        e.preventDefault();
        // console.log(text);
        onAdd(text)
        // todos?  打报告

    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <form action='http://www.baidu.com' onSubmit={handleSubmit}>
            <input type="text" placeholder="请输入代办事项" value={text} onChange={handleChange} />
            <button type="submit">提交</button>
        </form>
    )
}
export default TodoForm