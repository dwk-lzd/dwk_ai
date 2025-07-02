import { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'

function App() {
  // JSX react 优势  方便写html模板
  return (
    <div className='container'>
      {/* 自定义组件，App.jsx 的子组件 */}
      {/* 组件 html，css，js 像沙子一样， 组合起来，图片上传功能
      模块化了，可以实现复用，页面由dom树 -》 组件树 */}
      <PictureCard />
    </div>
  )
}

export default App
