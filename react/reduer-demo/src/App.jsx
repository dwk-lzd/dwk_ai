import {
  useState,
  useReducer
} from 'react'
import './App.css'

// function App() {


//   return (
//     <>
//       <LoginContext.Provider>
//         <ThemeContext.Provider>
//           <TodosContext.Provider>
//             <Layout>
//               <Header />
//               <Main />
//               <Fopter />
//             </Layout>
//           </TodosContext.Provider>
//         </ThemeContext.Provider>
//       </LoginContext.Provider>
//     </>
//   )
// }
// 管理好多
const initialState = {
  count: 0,
  // isLogin: false,
  // theme: 'light'
}
// 管理 分部门
// reducer纯函数 返回可靠的状态
// 状态生产器
// case 状态修改的规定
const reducer = (state, action) => {
  // increment,decrement
  switch (action.type) {
    case 'increment':
      // 新的状态
      return {
        count: state.count + 1
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    case 'incrementBynum':
      return {
        count: state.count + parseInt(action.payload)
      }
    case 'incrementTonum':
      return {
        count: state.count = action.payload
      }
    default:
      return state
  }
}
function App() {
  // 初始值 initialValue
  // 当前的状态值   旧状态  新状态
  // 界面由当前状态来驱动
  // 修改状态的方法
  // 响应式
  // 管理 useState 有的，都有，高级点
  const [count, setCount] = useState(0)
  // 适合大型项目
  // dispatch 派发  函数
  // 参数固定 {type:''} action_type
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>Count:{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'incrementTonum', payload: 20 })}>Add to 20</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button><br />
      <input type="text" value={count} onChange={(e) => setCount(e.target.value)} /> <br />
      <button onClick={() => dispatch({ type: 'incrementBynum', payload: count })}>incrementBynum</button>
    </>
  )
}

export default App
