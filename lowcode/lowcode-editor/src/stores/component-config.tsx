import { create } from "zustand";
import Page from "../editor/materials/Page";
import Container from "../editor/materials/Container";
import Button from "../editor/materials/Button";


export interface ComponentConfig {
    name: string,
    // Record 用来约束对象的类型
    defaultProps: Record<string, any>,
    component: any,

}

interface State {
    componentConfig: { [key: string]: ComponentConfig }
}

interface Actions {
    registerComponent: (name: string, componentConfig: ComponentConfig) => void
}

export const useComponentConfigStore = create<State & Actions>(set => ({
    componentConfig: {
        Container: {
            name: 'Container',
            defaultProps: {
            },
            component: Container
        },
        Button: {
            name: 'Button',
            defaultProps: {
                type: 'primary',
                text: '按钮'
            },
            component: Button
        },
        Page: {
            name: 'Page',
            defaultProps: {},
            component: Page
        },
    },


    registerComponent: (name: string, componentConfig: ComponentConfig) => set((state) => {
        return {
            ...state,
            componentConfig: {
                ...state.componentConfig,
                [name]: componentConfig
            }
        }
    })
}))