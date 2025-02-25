import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@design-system/foundations/foundations.scss'
import './styles/main.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
