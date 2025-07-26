import {
    useEffect
} from 'react'
import {
    chat
} from '@/llm/index.js'
const DIscount = () => {
    useEffect(() => {
        (async () => {
            const res = await chat([
                {
                    role: 'user',
                    content: '你好'
                }
            ])
            console.log(res);
        })()
    }, [])
    return (
        <>
            Discount
        </>
    )
}
export default DIscount;