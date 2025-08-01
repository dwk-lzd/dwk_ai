import {
    Search as SearchVant,
    Loading,
    Button
} from 'react-vant'
import {
    useState,
    useEffect,
    useRef
} from 'react'
import {
    ArrowLeft
} from '@react-vant/icons'
import {
    memo
} from 'react'
import styles from './Search.module.css'
import {
    useHotlistStore
} from '@/store/useHotlistStore'
import HotSearch from '@/components/HotSearch'
import HistorySearch from '@/components/HistorySearch'
import {
    useHistoryStore
} from '@/store/useHistoryStore'
const Search = () => {
    // 热门搜索
    const { setHotlist } = useHotlistStore()
    const { historyList, addHistory } = useHistoryStore()
    const searchRef = useRef(null)

    const [value, setValue] = useState('')

    return (
        <div className={`flex flex-col h-screen `}>
            <div className={`${styles.searchHeader}`}>

                <ArrowLeft
                    fontSize={20}
                    onClick={() => {
                        history.go(-1)
                    }}
                />

                <SearchVant
                    value={value}
                    label='搜索'
                    shape='round'
                    background='#81ecec'
                    ref={searchRef}
                    placeholder='请输入职位名称'
                    className={`flex-1`}
                    onChange={(value) => {
                        setValue(value)
                    }}
                />
                <Button
                    round
                    size='small'
                    color='blue'
                    className={`${styles.searchButton}`}
                    disabled={value.trim() === '' ? true : false}
                    onClick={() => {
                        const newHistory = [...historyList, {
                            id: historyList.length + 1,
                            text: value
                        }]
                        localStorage.setItem('searchHistory', JSON.stringify(newHistory))
                        addHistory(value)
                        setValue('')
                        searchRef.current.focus()
                    }}
                >搜索</Button>
            </div>
            {/* 搜索历史 */}
            <HistorySearch />
            {/* 热门搜索 */}
            <HotSearch />
        </div>
    )
}
export default memo(Search);