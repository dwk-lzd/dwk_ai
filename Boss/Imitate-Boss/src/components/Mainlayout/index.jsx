import {
    useState,
    useEffect
} from 'react'
import styles from './MainLayout.module.css'
import {
    Tabbar
} from 'react-vant'
// import {
//     Friends,
//     Chat,
//     Lock,
//     Manager
// } from '@react-vant/icons'
import Icon from "@/components/Icon/Icon"
import {
    Outlet,
    useNavigate
} from "react-router-dom"
const MainLayout = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    const tabs = [
        { icon: <Icon type='icon-qiuzhizhaocai' size={24} />, title: '求职', path: '/home' },
        { icon: <Icon type='icon-qingdaowusiguangchang-copy' size={24} />, title: '广场', path: '/square' },
        { icon: <Icon type='icon-chat' size={24} />, title: 'AI对话', path: '/aiConversation' },
        { icon: <Icon type='icon-wode1' size={24} />, title: '我的', path: '/acount' },
    ]
    useEffect(() => {
        // 监听路由变化，更新底部导航的激活状态
        const index = tabs.findIndex(tab => location.pathname.startsWith(tab.path))
        setActive(index)
    }, [])
    return (
        <div

            className={`flex flex-col h-screen`}
            style={{ paddingBottom: '50px' }}
        >
            <div className={styles.header}>
                <div className={styles.header_title}>
                    <h1>bubu智聘</h1>
                </div>
            </div>
            <div className={`flex-1 flex flex-col`}>
                <Outlet />
            </div>
            <Tabbar
                activeColor='#81ecec'
                value={active}
                onChange={(key) => {
                    setActive(key);
                    navigate(tabs[key].path);
                }}
            >
                {tabs.map((tab, index) => (
                    <Tabbar.Item
                        icon={tab.icon}
                        key={index}
                    >
                        {tab.title}
                    </Tabbar.Item>
                ))}
            </Tabbar>
        </div>
    )
}
export default MainLayout
