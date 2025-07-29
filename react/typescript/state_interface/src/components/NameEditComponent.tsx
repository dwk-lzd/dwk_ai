import React from 'react'
interface Props {
    userName: string;
    // typescript  除了内置的类型外  自定义类型  class interface
    // React 提供的类型  事件类型ChangeEvent
    // type = “radio” type=“checkbox"
    // 重要的地方约束 函数的返回值，函数的参数， 不会出错  99.99% 的错误
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NameEditComponent: React.FC<Props> = (props: Props) => {
    return (
        <>
            <label>Update name:</label>
            <input value={props.userName} onChange={props.onChange} />
        </>
    )
}
export default NameEditComponent;