import type { CommonComponentProps } from "../../../interface"
// import {
//     useComponentStore
// } from "../../../stores/components"
// import {
//     useComponentConfigStore

// } from "../../../stores/component-config"
// import {
//     useDrop
// } from "react-dnd"
import {
    useMaterialDrop
} from '../../../hooks/useMaterialDrop'

const Container = ({ id, name, children }: CommonComponentProps) => {

    // const { addConponent } = useComponentStore()
    // const { componentConfig } = useComponentConfigStore()
    const { drop } = useMaterialDrop(['Button', 'Container'], id)


    return (
        <div ref={drop} className='border-[1px] border=[#000] min-h-[100px] p-[20px]'>
            {children}
        </div>
    )
}

export default Container