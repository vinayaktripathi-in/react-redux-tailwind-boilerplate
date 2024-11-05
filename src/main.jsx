import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterConfigration } from './router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterConfigration />
    {/* <App /> */}
  </StrictMode>,
)
