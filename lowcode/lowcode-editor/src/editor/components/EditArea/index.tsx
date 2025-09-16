import {
    useEffect,
} from 'react'
import {
    useComponentStore
} from '../../../stores/components'

export function EditArea() {
    const { components, addConponent, deleteComponent } = useComponentStore()
    useEffect(() => {
        addConponent({
            id: 222,
            name: 'Container',
            props: {},
            children: []
        }, 1);
        addConponent({
            id: 333,
            name: 'Video',
            props: {},
            children: []
        }, 222)
    }, [])
    setTimeout(() => {
        deleteComponent(222)
    }, 2000)
    return (
        <div>
            {/* pre 用于保存文本的原有格式 */}
            <pre>
                {JSON.stringify(components, null, 2)}
            </pre>
        </div>
    )
}