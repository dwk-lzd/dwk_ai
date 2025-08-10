import {
  lazy,
  Suspense
} from 'react'
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'
import Loading from '@/components/Loading'
import Toast from '@/components/Toast'
const Home = lazy(() => import('@/pages/Home'))
const Search = lazy(() => import('@/pages/Search'))
const Discount = lazy(() => import('@/pages/Discount'))
const Collection = lazy(() => import('@/pages/Collection'))
const Trip = lazy(() => import('@/pages/Trip'))
const Acount = lazy(() => import('@/pages/Acount'))
const Detail = lazy(() => import('@/pages/Detail'))
const Coze = lazy(() => import('./pages/Coze/index.jsx'));
const Article = lazy(() => import('./pages/Article/index.jsx'))
const ArticleNew = lazy(() => import('./pages/Article/ArticleNew/index.jsx'))
import './App.css'

function App() {


  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* 带有tabbar的Layout */}
        <Routes >
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/discount' element={<Discount />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/trip' element={<Trip />} />
            <Route path='/acount' element={<Acount />} />
          </Route>

          {/* 空的Layout */}

          <Route path='/' element={<BlankLayout />}>
            <Route path='/search' element={<Search />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path="/coze" element={<Coze />} />
            <Route path='/article' element={<Article />} >
              <Route path='new' element={<ArticleNew />} />
            </Route>
          </Route>
        </Routes>


      </Suspense>
      <Toast />
    </>
  )
}

export default App
