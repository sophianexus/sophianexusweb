import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Headline from './components/Headline/Headline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headline />
  </StrictMode>,
)
