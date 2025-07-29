import SearchBox from '@/components/SearchBox'
import useSearchStore from '@/store/useSearchStore'
import styles from './index.module.css'
import {
    useState,
    useEffect,
    memo
} from 'react'

const HotListItems = memo((props) => {
    const { hotList } = props
    return (
        <div className={styles.hot}>
            <h1>热门搜索</h1>
            {hotList.map(item => (
                <div
                    key={item.id}
                    className={styles.item}
                >
                    {item.city}
                </div>
            ))}
        </div>
    )
})

const Search = () => {
    // 单向数据流
    // 反复生成 useCallback
    const [query, setQuery] = useState('')
    const {
        hotList,
        setHotList,
        suggestList,
        setSuggestList
    } = useSearchStore()

    useEffect(() => {
        setHotList()
    }, [])
    const handleQuery = (query) => {
        // api 请求
        setQuery(query)
        if (!query.trim()) return
        setSuggestList(query)
    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <SearchBox handleQuery={handleQuery} />
                <div className={styles.resultsContainer}>
                    {/* 修改点2：根据query值条件渲染热门搜索 */}
                    {!query && <HotListItems hotList={hotList} />}

                    {/* 修改点3：根据query值条件渲染搜索建议 */}
                    {query && (
                        <div className={styles.list}>
                            {suggestList.map(item => (
                                <div key={item} className={styles.item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
export default Search;