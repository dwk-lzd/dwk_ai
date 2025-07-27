import {
    useState

} from 'react'
import styles from './concern.module.css'

import {
    GoodJobO,
    EyeO,
    MoreO
} from '@react-vant/icons'
import {
    Divider
} from 'react-vant'
const Comprehensive = () => {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: '动态规划怎么理解',
            content: '相信刚接触动态规划的同学一定对其恨之入骨,我也是,完全没有思路,找不到套路,做一道不会一道.每次不看题解又不会,真的很折磨人!...',
            like: 10,
            view: 100,
            time: '1小时前',
            author: '我爱作田'
        },
        {
            id: 2,
            title: '移动端React开发实战：打造流畅的用户体验',
            content: '最近我正在开发一个移动端旅游应用，核心功能包括首页、特惠专区、收藏、行程和个人账户等模块。...',
            like: 20,
            view: 200,
            time: '2小时前',
            author: 'AAA大运重卡（只跑国道）'
        },
        {
            id: 3,
            title: '深入理解路由守卫',
            content: '在今天的项目中，我实现了一个完整的 JWT（JSON Web Token）登录鉴权系统，涵盖了从状态管理到路由守卫的全流程。...',
            like: 30,
            view: 300,
            time: '3小时前',
            author: '我想说一句'
        },
        {
            id: 4,
            title: 'Redux状态管理：从入门到精通',
            content: '在React应用开发的征途中，状态管理始终是绕不开的话题。从最初的useState到Context API，再到Redux，我们一直在寻找更优雅的解决方案。...',
            like: 40,
            view: 400,
            time: '4小时前',
            author: '二二三四'
        },
        {
            id: 5,
            title: 'Es6数组的魔法口袋：深入解析与实战技巧',
            content: '在JavaScript的世界里，数组就像神奇的魔法口袋 - 看似简单，却暗藏玄机。今天我们一起揭开数组的神秘面纱，看看这些"魔法口袋"的奇妙特性！',
            like: 50,
            view: 500,
            time: '5小时前',
            author: '学不会的算法'
        }
    ])
    return (
        <div className={`flex flex-column ${styles.concern}`}>
            {articles.map(item => (
                <div key={item.id} className={`flex flex-column ${styles.article}`}>
                    <h3 style={{ fontSize: '16px' }} className={`flex-1 ${styles.distance1}`}>{item.title}</h3>
                    <p className={`flex-1 ${styles.articleBody} ${styles.distance1}`} style={{ fontSize: '12px' }}>{item.content}</p>
                    <div className={`flex flex-justify-center ${styles.distance1}`}>
                        <p style={{ fontSize: '12px' }} className={styles.distance2}>{item.author}</p>
                        <p style={{ fontSize: '12px' }} className={styles.distance2}>{item.time}</p>
                        <div className={styles.distance2}>
                            <EyeO fontSize='12px' />
                        </div>
                        <p style={{ fontSize: '12px' }} className={styles.distance2}>{item.view}</p>
                        <div className={styles.distance2}>
                            <GoodJobO fontSize='12px' />
                        </div>
                        <p style={{ fontSize: '12px' }} className={styles.distance2}>{item.like}</p>
                        <div className={styles.distance2}>
                            <MoreO fontSize='12px' />
                        </div>
                    </div>
                    <Divider margin='0' />
                </div>

            ))}
        </div>
    )
}
export default Comprehensive;
