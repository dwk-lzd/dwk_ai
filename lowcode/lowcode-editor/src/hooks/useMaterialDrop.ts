import {
    useDrop
} from 'react-dnd'

import {
    useComponentConfigStore
} from '../stores/component-config'
import {
    useComponentStore
} from '../stores/components'

export function useMaterialDrop(accept: string[], id: number) {
    const {
        addConponent
    } = useComponentStore()
    const {
        componentConfig
    } = useComponentConfigStore()

    const [{ canDrop }, drop] = useDrop(() => ({
        accept,
        drop: (item: { type: string }, monitor) => {
            const didDrop = monitor.didDrop()
            if (didDrop) return

            const props = componentConfig[item.type].defaultProps
            addConponent({
                id: new Date().getTime(),
                name: item.type,
                props

            }, id)
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop()
        })
    }))

    return {
        drop,
        canDrop
    }
}