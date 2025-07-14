import {
    useState,
} from 'react'
import {
    useNavigate, // Navigate 组件 js 跳转
    useLocation,
} from 'react-router-dom'
const Login = () => {
    const location = useLocation() // 当前的路由信息
    // console.log(location.state.from);
    const navigate = useNavigate() // 函数 获得navigate能力 跳转
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(username, password);
        if (username === 'admin' && password === '123456') {
            localStorage.setItem('isLogin', true)
            navigate(location?.state?.from)
        } else {
            alert('用户名或密码错误')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>登录</h1>
            <input
                type="text"
                placeholder="请输入用户名"
                required
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
            />
            <input
                type="password"
                placeholder="请输入密码"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            />
            <button type="submit">登录</button>
        </form>
    )
}
export default Login