import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Declare global types for requestIdleCallback
declare global {
  interface Window {
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
    cancelIdleCallback(handle: number): void;
  }
}

// Use requestIdleCallback for non-critical initialization
const renderApp = () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Check if requestIdleCallback is available
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(renderApp)
} else {
  // Fallback for browsers that don't support requestIdleCallback
  setTimeout(renderApp, 1)
}
