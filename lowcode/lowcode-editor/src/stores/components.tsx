// 编辑区域的数据由store来管理
import { create } from 'zustand'

export interface Component {
    id: number;
    name: string;
    props: any;
    children?: Component[]
    parentId?: number;
}

interface State {
    components: Component[];
}
// store 主要提供 State & Action

interface Action {
    addConponent: (component: Component, parentId?: number) => void;
    deleteComponent: (id: number) => void;
    updateComponent: (componentId: number, props: any) => void;
}

export const useComponentStore = create<State & Action>(
    (
        (set, get) => ({
            components: [
                {
                    id: 1,
                    name: 'Page',
                    props: {},
                    desc: '页面'
                }
            ],
            addConponent: (component, parentId) => set((state) => {

                if (parentId) {
                    // 知道父组件
                    const parentComponent = getComponentById(
                        parentId,
                        state.components
                    );
                    if (parentComponent) {
                        if (parentComponent.children) {
                            parentComponent.children?.push(component)
                        } else {
                            parentComponent.children = [component]
                        }
                    }
                    component.parentId = parentId
                    return {
                        components: [...state.components]
                    }
                }
                return {
                    components: [...state.components, component]
                }
            }),
            deleteComponent: (componentId) => {
                if (!componentId) return
                const component = getComponentById(componentId, get().components)
                if (component?.parentId) {
                    const parentComponent = getComponentById(
                        component.parentId,
                        get().components
                    )
                    if (parentComponent) {
                        parentComponent.children = parentComponent.children?.filter(item => item.id !== componentId)
                    }
                    set({ components: [...get().components] })
                }

            },
            updateComponent: () => { }

        })
    )
)

export function getComponentById(
    id: number | null,
    components: Component[]
): Component | null {
    if (!id) return null;
    for (const component of components) {
        if (component.id === id) return component;
        if (component.children && component.children.length > 0) {
            const result = getComponentById(id, component.children);
            if (result) return result;
        }
    }
    return null
}