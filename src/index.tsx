import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/theme'
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary'
import { App } from './App'

import '@/lib/i18n'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
)
