import {
    useCountstore
} from '../../store/count'
const Counter = () => {

    const {
        count,
        increment,
        decrement
    } = useCountstore()
    return (
        <>
            <button onClick={decrement}>-</button>
            Counter{count}
            <button onClick={increment}>+</button>
        </>
    )
}
export default Counter;