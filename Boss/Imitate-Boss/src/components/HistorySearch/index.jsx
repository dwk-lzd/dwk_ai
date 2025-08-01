import {
    memo,
    useEffect
} from 'react'
import {
    Cross
} from '@react-vant/icons'
import {
    useHistoryStore
} from '@/store/useHistoryStore'
import styles from './HistorySearch.module.css'

const HistorySearch = () => {
    const { historyList, addHistory, removeHistory, clearHistory } = useHistoryStore()

    return (
        <div className={`${styles.historyContainer}`}>
            <div className={`${styles.historyHeader}`}>
                {historyList && historyList.length > 0 ? (<h2>搜索历史</h2>) : ''}
                {historyList && historyList.length > 0 ? (<p onClick={() => {
                    // 一键清除
                    clearHistory()
                    localStorage.removeItem('searchHistory')
                }}>一键清除</p>) : ''}
            </div>
            <div className={`${styles.historyList}`}>
                {
                    historyList.map((item) => {
                        return (
                            <div key={item.id} className={`${styles.historyItem}`}>
                                <div>
                                    {item.text}
                                </div>
                                <div
                                    onClick={() => {
                                        removeHistory(item.id)
                                        // 同時清除本地存儲
                                        const currentHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]')
                                        const updatedHistory = currentHistory.filter(historyItem => historyItem.id !== item.id)
                                        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))
                                    }}
                                >
                                    <Cross fontSize={10} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default memo(HistorySearch);