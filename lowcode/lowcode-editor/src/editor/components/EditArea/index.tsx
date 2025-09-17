import React, {
    useEffect,
} from 'react'
import {
    type Component,
    useComponentStore
} from '../../../stores/components'
import { useComponentConfigStore } from '../../../stores/component-config'
export function EditArea() {
    const { components, addConponent, deleteComponent } = useComponentStore()
    const { componentConfig } = useComponentConfigStore()
    // useEffect(() => {
    //     addConponent({
    //         id: 222,
    //         name: 'Container',
    //         props: {},
    //         children: []
    //     }, 1);
    //     addConponent({
    //         id: 333,
    //         name: 'Button',
    //         props: {},
    //         children: []
    //     }, 222)
    // }, [])
    // setTimeout(() => {
    //     deleteComponent(222)
    // }, 2000)

    function renderComponents(components: Component[]): React.ReactNode {
        return components.map((component: Component) => {
            const config = componentConfig?.[component.name]
            if (!config?.component) {
                return null
            }
            return React.createElement(
                config.component,
                {
                    key: component.id,
                    id: component.id,
                    ...config.defaultProps,
                    ...component.props,
                },
                renderComponents(component.children || [])
            )
        })
    }
    return (
        <>
            {/* pre 用于保存文本的原有格式 */}
            {/* <pre>
                {JSON.stringify(components, null, 2)}
            </pre> */}
            {renderComponents(components)}
        </>
    )
}