import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@design-system/foundations/foundations.scss'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { ToastContainer } from "@design-system/toast";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
