import {
  useState,
  lazy,
  Suspense
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {
  Loading
} from 'react-vant'
import './App.css'
import MainLayout from './components/Mainlayout/index.jsx'
const Home = lazy(() => import('./pages/Home'))
const AiConversation = lazy(() => import('./pages/AiConversation'))
const Square = lazy(() => import('./pages/Square'))
const Acount = lazy(() => import('./pages/Acount/index.jsx'))
function App() {


  return (
    <>
      <Suspense fallback={<Loading type='ball' className='fixed-loading' />}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/aiConversation' element={<AiConversation />} />
            <Route path='/square' element={<Square />} />
            <Route path='/acount' element={<Acount />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
