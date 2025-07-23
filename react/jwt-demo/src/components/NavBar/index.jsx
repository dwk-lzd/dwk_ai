import {
    Link
} from 'react-router-dom'
import {
    useUserStore
} from '../../store/user'
const NavBar = () => {
    const { isLogin, user, logout } = useUserStore()
    console.log(isLogin, user);
    return (
        <nav style={{ padding: '10px', borderBottom: "1px solid #ccc" }}>
            <Link to='/'>Home</Link>&nbsp;&nbsp;
            <Link to='/pay'>Pay</Link>&nbsp;&nbsp;
            {
                isLogin ? (
                    <>
                        <span>欢迎您，{user.username}</span>
                        <button onClick={() => { logout(); }}>退出登录</button>
                    </>
                ) : (
                    <Link to='/login'>登录</Link>
                )
            }
        </nav>
    )
}
export default NavBar;
