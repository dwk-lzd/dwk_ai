import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

ReactDOM.createRoot(
  document.getElementById('root')!  // !非空断言操作符
).render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>
)