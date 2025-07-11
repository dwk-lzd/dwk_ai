import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import './App.css'

// function App() {
//   // 响应式对象
//   const boxRef = useRef()
//   console.log(boxRef.current, boxRef);

//   useEffect(() => {
//     console.log('useEffect height', boxRef.current.offsetHeight);
//   }, [])
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect height', boxRef.current.offsetHeight);
//   }, [])
//   return (
//     <>
//       <div ref={boxRef} style={{ height: 100 }}></div>
//     </>
//   )
// }

// function App() {
//   const [content, setContetn] = useState(`曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：‘我爱你’。如果非要给这份爱加上一个期限，我希望是一万年。`)
//   const ref = useRef()
//   // useEffect(() => {
//   //   ref.current.style.height = '200px'
//   // }, [])
//   useLayoutEffect(() => {
//     setContetn(`React并不会立即更新状态并重新渲染组件。相反，它会将更新请求加入一个队列，然后在事件处理函数执行完毕后，统一处理这些更新，最后进行一次重新渲染。这种批处理机制是为了提高性能，避免不必要的重复渲染。`)
//     ref.current.style.height = '200px'
//   }, [])
//   return (
//     <div ref={ref} style={{ height: '50px', backdground: 'lightbule' }}>{content}</div>
//   )
// }

// 弹窗
function Modal() {
  const ref = useRef()
  useLayoutEffect(() => {
    const height = ref.current.offsetHeight
    ref.current.style.marginTop = `${(window.innerHeight - height) / 2}px`
  }, [])
  return (
    <div ref={ref} style={{ position: 'absolute', height: '200px', width: '200px', background: 'red' }}>我是弹窗</div>
  )
}
function App() {
  return (
    <>
      <Modal />
    </>
  )
}
export default App
