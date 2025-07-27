import {
    useState,
    useEffect,
} from "react"
import styles from './home.module.css'
import {
    Outlet,
    useNavigate,
} from "react-router-dom"
import {
    Tabbar,
    Search,
    Image
} from 'react-vant'
import {
    Bell
} from '@react-vant/icons'
const Home = () => {
    useEffect(() => {
        const index = tabs.findIndex(tab => tab.path === location.pathname)
        setActive(index)

    }, [])

    const [active, setActive] = useState(0)
    const navigate = useNavigate()
    const [tabs, setTabs] = useState([

        {
            id: 1,
            title: '关注',
            path: '/home/concern'

        },
        {
            id: 2,
            title: '综合',
            path: '/home/comprehensive'
        },
        {
            id: 3,
            title: '排行榜',
            path: '/home/ranking'
        },
        {
            id: 4,
            title: '后端',
            path: '/home/backend'
        },
        {
            id: 5,
            title: '前端',
            path: '/home/frontend'
        },
        {
            id: 6,
            title: 'Android',
            path: '/home/android'
        }
    ])
    return (
        <div className="flex flex-column h-screen">
            <div className={`flex justify-aliign ${styles.top}`} >
                <div className={styles.center}>
                    <Image src='//lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg' width='35px' height='35px' />
                </div>
                <h2 style={{ fontSize: '16px', color: '#1E80ff' }}>掘金</h2>
                <div className={styles.center} style={{ maxWidth: '50%' }}>
                    <Search
                        placeholder="搜索内容"
                        shape="round"
                        className={styles.search}
                    >
                    </Search>
                </div>

                <div className={styles.center} >
                    <Bell fontSize='24px' />
                </div>
                <div className={styles.center} >
                    <Image round src='https://p26-passport.byteacctimg.com/img/user-avatar/fb24725a26316a90015754b772222e73~80x80.awebp' width='35px' height='35px' />
                </div>

            </div>

            <div className={styles.tab}>
                <Tabbar

                    value={active}
                    fixed={false}
                    onChange={
                        ((key) => {
                            setActive(key);
                            navigate(tabs[key].path);
                        })
                    }
                >
                    {tabs.map(tab => (
                        <Tabbar.Item
                            key={tab.id}

                        >
                            {tab.title}
                        </Tabbar.Item>
                    ))}
                </Tabbar>
            </div>

            <div className={`flex flex-1 ${styles.body}`}>
                <Outlet />
            </div>

        </div>
    )
}
export default Home;