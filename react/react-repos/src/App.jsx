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
const RepoDetail = lazy(() => import('./pages/RepoDetail'))
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
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
        <Route path='/' element={<Home />} />
        <Route path='/users/:id/repos' element={<RepoList />} />
        <Route path='/users/:id/repos/:repoId' element={<RepoDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App