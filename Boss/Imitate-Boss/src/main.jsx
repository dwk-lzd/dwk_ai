import { createRoot } from 'react-dom/client'
import 'lib-flexible'
import './index.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
