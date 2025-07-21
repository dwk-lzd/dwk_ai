import {
  useState,
  useEffect
} from 'react'
import './App.css'
import {
  getTodos,
  getRepos
} from '@/api'
function App() {
  // const [todos, setTodos] = useState([])
  const [repos, setRepos] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // const todoResult = await getTodos()
      // console.log(todoResult);
      // setTodos(todoResult.data.data)

      const repoResult = await getRepos()
      console.log(repoResult);
      setRepos(repoResult.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {/* <h2>Todos</h2>
      {
        todos.map(todo => (
          <div key={todo.id}>{todo.title}</div>
        ))
      } */}
      <h1>Repos</h1>
      {
        repos.map(repo => (
          <div key={repo.id}>
            <h2>{repo.title}</h2>
            <p>{repo.description}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
