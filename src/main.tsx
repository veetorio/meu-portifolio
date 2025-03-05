import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProviderApp } from './assets/context/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProviderApp>
      <App />
    </ThemeProviderApp>
  </StrictMode>,
)
