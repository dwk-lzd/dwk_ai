import {
    memo,
    useEffect
} from 'react'
import styles from './Jobs.module.css'
import {
    Loading
} from 'react-vant'
import {
    useJobsStore
} from '@/store/useJobsStore'
const Jobs = () => {
    const {
        jobs,
        fetchMore,
        loading
    } = useJobsStore()
    useEffect(() => {
        fetchMore()
    }, [])
    return (
        <div>
            Jobs
        </div>
    )
}
export default memo(Jobs)