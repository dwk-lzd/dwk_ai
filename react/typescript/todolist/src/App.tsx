import './App.css'
import HelloComponent from './components/HelloComponent.tsx'

// react + typescript
// javascript  
// jsx 后缀改成tsx
// 多写一些代码 类型声明  代码质量保驾护航
// 函数进行类型约束
// const HelloComponent = () => {
//   // void  空  ReactNode
//   return 1
// }
function App() {
  // 编译阶段
  let count: number = 10;
  const title: string = 'hello ts'
  const isDone: boolean = true
  const list: (number | string)[] = [1, '2', 3]
  // 元祖类型
  const tuple: [number, string] = [10, 'hello']
  // 枚举类型
  enum Status {
    Pending,
    Fulfilled,
    Rejected
  }

  const status: Status = Status.Pending
  // 对象的约束
  // 接口类
  interface User {
    name: string;
    age: number;
    isSingle?: boolean
  }
  // 使用interface 来约定类型
  const user: User = {
    name: 'zhangsan',
    age: 18,
    isSingle: true
  }
  return (
    <>
      {count}
      {title}
      {user.name}{user.age}
      {/* typescript 很严格 */}
      <HelloComponent name='Dream耀' />
    </>
  )
}

export default App
