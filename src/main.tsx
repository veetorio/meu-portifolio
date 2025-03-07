import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProviderApp } from './assets/context/ThemeContext.tsx'
import { TranslateProvider } from './assets/context/TranslateContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TranslateProvider>
      <ThemeProviderApp>
        <App />
      </ThemeProviderApp>
    </TranslateProvider>
  </StrictMode>,
)
