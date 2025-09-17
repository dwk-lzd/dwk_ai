import { Button as AntdButton } from 'antd'
// button type  只能是联合类型中的一种 "primary"|"default"|link" | "default" | "primary" | "dashed" | "text
import type { ButtonType } from 'antd/es/button'

export interface ButtonProps {
    type: ButtonType
    text: string
}

const Button = ({ type, text }: ButtonProps) => {
    return (
        <AntdButton type={type}>{text}</AntdButton>
    )
}

export default Button