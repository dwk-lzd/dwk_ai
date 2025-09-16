import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')!  // !非空断言操作符
).render(<App />)