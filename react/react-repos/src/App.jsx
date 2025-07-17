import {
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
// import {
//   getRepos,
//   getRepoDetail
// } from './api/repos';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Loading from './components/Loading'
const RepoList = lazy(() => import('./pages/RepoList'))
import './App.css'

function App() {
  // 测试API请求
  // useEffect(() => {
  //   (async () => {
  //     const repos = await getRepos('dwk-lzd');
  //     const repo = await getRepoDetail('dwk-lzd', 'dwk_ai');
  //     console.log(repos, repo);
  //   })()
  //   // return () => {
  //   //   console.log('----')
  //   // }
  // }, [])
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/users/:id/repos' element={<RepoList />} />
        <Route path='*' element={<Navigate to='/users/dwk-lzd/repos' />} />
      </Routes>
    </Suspense>
  )
}

export default App