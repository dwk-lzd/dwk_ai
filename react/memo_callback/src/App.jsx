import {
  useState,
  useEffect,
  useCallback,
  useMemo,  // 缓存一个复杂计算的值
} from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)
  console.log('App render');

  const expensiveComputation = (n) => {
    console.log('expensiveComputation');
    // 复杂计算 开销高
    for (let i = 0; i < 1000000; i++) {
      i++
    }
    return n * 2
  }
  const result = useMemo(() => expensiveComputation(num), [num])

  useEffect(() => {
    console.log('count', count);
  }, [count])
  useEffect(() => {
    console.log('num', num);
  }, [num])

  // rerender  重新生成
  // 不要重新生成，和 useEffect [] 一样
  // callback 回调函数 缓存下来
  // 依赖项 num 没有变化，就不会重新生成
  const handleClick = useCallback(() => {
    console.log('hanleClick');
  }, [num])
  return (
    <>
      {/* <div>{expensiveComputation(num)}</div> */}
      <div>{result}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <br />
      <button onClick={() => setNum(num + 1)}>Add Num</button>
      <br />
      <Button num={num} onClick={handleClick}>Click Me</Button>
    </>
  )
}

export default App
