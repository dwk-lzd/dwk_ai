import {
  useState,
  Suspense,
  lazy // 懒加载
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'

// 函数   路由 -> Route
// 新的组件
// 懒加载 lazy返回一个新组建
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Notfound = lazy(() => import('./pages/Notfound'))
const Login = lazy(() => import('./pages/Login'))

// import Home from './pages/Home'
// import About from './pages/About'
// 30 几个页面
function App() {


  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            {/* 鉴权 */}
            <Route path='/pay' element={
              <ProtectRoute>
                {/* <Pay /> */}
                <div>123</div>
                <div>456</div>
              </ProtectRoute>
            } />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
