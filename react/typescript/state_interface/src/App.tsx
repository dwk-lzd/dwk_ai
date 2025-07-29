import { useState } from 'react'
import './App.css'
import NameEditComponent from './components/NameEditComponent.tsx'
function App() {
  // js 代码
  // const [name, setName] = useState('initialName')
  const [name, setName] = useState<string>('initialName')
  // 单向数据流
  const setUsernameState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  return (
    <>
      <NameEditComponent userName={name} onChange={setUsernameState} />
    </>
  )
}

export default App
