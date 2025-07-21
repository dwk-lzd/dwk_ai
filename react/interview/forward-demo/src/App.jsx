import {
  useState,
  useRef,
  useEffect,
  forwardRef
} from 'react'
import './App.css'

const Guang = (props, ref) => {
  console.log(props, ref);
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )
}
// 在父组件控制子组件的ref
// 将组件作为forwardRef()参数返回,一个全新的组件，这个组件可以接受一个ref参数，
const WrapperGuang = forwardRef(Guang)

function App() {
  // 父组件  持有ref  子组件  使用ref
  const ref = useRef(null)
  console.log(ref.current);
  useEffect(() => {
    ref.current?.focus()
  }, [])
  return (
    <div className='App'>
      {/* <input ref={ref} /> */}
      {/* <Guang ref={ref} /> */}
      <WrapperGuang ref={ref} />
    </div>
  )
}

export default App
