import {
  useState,
  lazy,
  Suspense,
} from 'react'
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import './App.css'
const Home = lazy(() => import('@/components/Home/index'))
const Concern = lazy(() => import('@/pages/concern/index'))
const Comprehensive = lazy(() => import('@/pages/comprehensive/index'))
const Ranking = lazy(() => import('@/pages/ranking/index'))
const Backend = lazy(() => import('@/pages/backend/index'))
const Frontend = lazy(() => import('@/pages/frontend/index'))
const Android = lazy(() => import('@/pages/android/index'))
function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} >
          <Route path='/home/concern' element={<Concern />} />
          <Route path='/home/comprehensive' element={<Comprehensive />} />
          <Route path='/home/ranking' element={<Ranking />} />
          <Route path='/home/backend' element={<Backend />} />
          <Route path='/home/frontend' element={<Frontend />} />
          <Route path='/home/android' element={<Android />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
