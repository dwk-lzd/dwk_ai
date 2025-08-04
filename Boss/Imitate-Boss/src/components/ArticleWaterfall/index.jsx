import {
    useEffect,
    memo,
    useRef
} from 'react'
import styles from './ArticleWaterfall.module.css'
import {
    GoodJobO,
    ShareO,
    CommentO,
} from '@react-vant/icons'
import ImageCard from '@/components/ImageCard'
const ArticleWaterfall = ({ articles, fetchArticle }) => {
    const bottomRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                fetchArticle()
            }
        })
        if (bottomRef.current) observer.observe(bottomRef.current);
        return () => observer.disconnect()
    }, [])
    return (
        <div className={styles.articleContainer}>
            {
                articles.map(item => (
                    <div key={item.id} className={styles.articleItem}>
                        <div className={styles.articleItemBox}>
                            <div className={styles.articleUser}>
                                <ImageCard url={item.avator} />
                                <p>{item.person}</p>
                            </div>
                            <div className={styles.articleText}>
                                <p>{item.text}</p>
                            </div>
                            <div className={styles.articleImages}>
                                {
                                    item.images.map((image, index) => (
                                        <ImageCard key={index} url={image} />
                                    ))
                                }
                            </div>
                            <div className={styles.articleType}>
                                <p>{`# ${item.type}`}</p>
                            </div>
                            <div className={styles.articleContact}>

                                <div className={styles.articleContactBox}>
                                    {
                                        item.comments.map((comment, index) => (
                                            <div key={comment.id} className={styles.articleCommentItem}>
                                                <p>{`${comment.name}：${comment.text}`}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className={styles.articleFooter}>
                                <GoodJobO fontSize={20} />
                                <CommentO fontSize={20} />
                                <ShareO fontSize={20} />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div ref={bottomRef}>

            </div>
        </div>
    )
}
export default memo(ArticleWaterfall)