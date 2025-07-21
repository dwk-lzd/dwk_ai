import { useState } from 'react'
import './App.css'
import AnotherButton from './components/Another'
import Button from './components/Button'
// import 不仅会加载，还会去运行。 路由懒加载
function App() {


  return (
    <>
      <Button />
      <AnotherButton />
    </>
  )
}

export default App
