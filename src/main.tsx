import React from 'react'
import ReactDOM from 'react-dom/client'
// BrowserRouter の代わりに HashRouter をインポート
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter> を <HashRouter> で囲む */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)