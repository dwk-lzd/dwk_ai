import type { CommonComponentProps } from '../../../interface'
// import {
//     useComponentStore
// } from '../../../stores/components'
// import {
//     useComponentConfigStore
// } from '../../../stores/component-config'
import { useMaterialDrop } from '../../../hooks/useMaterialDrop'

export default function Page({ id, name, children }: CommonComponentProps) {
    // const { addConponent } = useComponentStore()
    // const { componentConfig } = useComponentConfigStore()
    const { drop } = useMaterialDrop(['Button', 'Container'], id)
    return (
        <div
            ref={drop}
            className='p-[20px] h-[100%] box-border'
        >
            {children}
        </div>
    )
}