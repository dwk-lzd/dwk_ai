import React from 'react'
import avatar from './images/avatar.webp'
import book from './images/book.webp'
import {
    add
} from './main.js'
const Hello = () => {
    return (
        <>
            来了
            <img src={avatar} alt="" />
            <img src={book} alt="" />
            {add(1, 2)}
        </>
    )
}
export default Hello