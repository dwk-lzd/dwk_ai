import {
    useComponentStore
} from '../../../stores/components'
export function Setting() {
    const { components } = useComponentStore()
    return (
        <div>
            <pre>
                {JSON.stringify(components, null, 2)}
            </pre>
        </div>
    )
}