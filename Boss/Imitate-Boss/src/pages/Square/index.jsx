import styles from './Square.module.css'
import Icon from '@/components/Icon/Icon'
import { useNavigate } from 'react-router-dom'
import { NoticeBar, Swiper, Tabs } from 'react-vant'
import {
    CommentO
} from '@react-vant/icons'
import ArticleWaterfall from '@/components/ArticleWaterfall'
import { useArticleStore } from '@/store/useArticleStore'


const Square = () => {
    const navigate = useNavigate()
    const navList = ['推荐', '关注', '同行说']
    // 通知內容數據
    const noticeData = [
        '我的面试经历',
        '职场人几点钟下班',
        '计算机专业人均工资',
    ]
    const { articles, fetchArticle } = useArticleStore()

    return (
        <div>
            <div className={styles.HeaderSearch}>
                <div className={styles.HeaderSearchLeft}>
                    <Icon type='icon-mianxingdaiyanjingnanshenglikenanligongnanchengxuyuantubiao' size={30} />
                </div>

                <div className={styles.HeaderSearchInput}
                    onClick={() => {
                        navigate('/search')
                    }}
                >
                    <Icon type='icon-sousuo' size={20} />
                    <div className={styles.HeaderSearchInputNotice}>
                        <NoticeBar
                            background='transparent'
                            color='#666'
                            // scrollable
                            speed={50}
                            delay={2}
                        >
                            <Swiper
                                autoplay={2000}
                                indicator={false}
                                vertical
                                className={styles.noticeSwiper}
                                loop
                            >
                                {noticeData.map((item, index) => (
                                    <Swiper.Item key={index}>
                                        <div className={styles.noticeItem}>
                                            {item}
                                        </div>
                                    </Swiper.Item>
                                ))}
                            </Swiper>
                        </NoticeBar>
                    </div>
                </div>

                <div className={styles.HeaderSearchRight}>
                    <CommentO fontSize={25} />
                </div>
            </div>
            <Tabs
                background=' linear-gradient(to bottom,#81ECEC49 0%, white 100%)'
                type='line'
                color='black'
                animated={true}
                swipeable={true}
                align='start'
            >
                {navList.map((item, index) => (
                    <Tabs.TabPane key={index} title={item}
                    >
                        <ArticleWaterfall articles={articles} fetchArticle={fetchArticle} />
                    </Tabs.TabPane>
                ))}
            </Tabs>
        </div>
    )
}

export default Square
