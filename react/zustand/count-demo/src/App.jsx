import { useState } from 'react'
import './App.css'

import Counter from './components/Counter'
import {
  useCountstore
} from './store/count'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'
function App() {
  const {
    count,
    increment,
    decrement
  } = useCountstore()

  return (
    <>
      App中的 {count}
      <Counter />
      <TodoList />
      <RepoList />
    </>
  )
}

export default App
