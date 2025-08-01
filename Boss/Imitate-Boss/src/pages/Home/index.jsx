import {
    useState,
    useEffect
} from 'react';
import { useNavigate } from 'react-router-dom'
import {
    Tabbar,
    Search,
    Tabs
} from 'react-vant'
import Jobs from '@/pages/Jobs/index.jsx'
import styles from './Home.module.css'
import {
    Hot,
    VipCard,
    AddSquare,
    Location
} from '@react-vant/icons'
const Home = () => {


    const [active, setActive] = useState(1)
    const navigate = useNavigate()
    const tabs = [
        { title: '全职', path: '/home/fulljob' },
        { title: '实习', path: '/home/internship' },
        { title: '兼职', path: '/home/parttime' },
    ]
    const tabs2 = [
        { title: '附近工作', icon: <Location /> },
        { title: '热门工作', icon: <Hot /> },
        { title: 'VIP特权', icon: <VipCard /> },
        { title: '全部', icon: <AddSquare /> },
    ]
    const jobs = [
        { title: '前端开发' },
        { title: '后端开发' },
        { title: 'Java' },
        { title: '测试' },
        { title: '运维' },
    ]
    return (
        <div className={`flex flex-col flex-1`}>
            <div className={`flex`}>

                <Tabbar
                    fixed={false}
                    border={false}
                    value={active}
                    activeColor='black'
                    onChange={(key) => {
                        setActive(key);
                    }}
                >
                    {tabs.map((tab, index) => (
                        <Tabbar.Item
                            key={index}
                            icon={tab.icon}
                            className={`${styles.tabbar} ${active === index ? styles.active : ''}`}
                        >
                            {tab.title}
                        </Tabbar.Item>
                    ))}
                </Tabbar>

                <Search shape='round' className={styles.search} onFocus={() => {
                    navigate('/search')
                }} />
            </div>
            <div>
                <Tabbar
                    fixed={false}
                    border={false}

                >
                    {tabs2.map((tab, index) => (
                        <Tabbar.Item
                            key={index}
                            icon={tab.icon}
                        >
                            {tab.title}
                        </Tabbar.Item>
                    ))}
                </Tabbar>
            </div>
            <div className={`flex-1 flex-col flex`}>
                <Tabs>
                    {jobs.map((job, index) => (
                        <Tabs.TabPane key={index} title={job.title} className={`flex-1 `}>
                            <Jobs />
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>

        </div>
    )
}
export default Home
