<style>
  * {
    font-family: "SF Mono", "JetBrains Mono", monospace !important;
  }
</style>
# Brainly LCP Optimization Guide

This document outlines the optimizations implemented to improve the Largest Contentful Paint (LCP) performance of the Brainly application.

## Optimizations Implemented

### 1. Font Loading Optimization
- Reduced font weights to only those used (400, 500, 600, 700) from the full range (100-900)
- Added `font-display: swap` to ensure text remains visible during font loading
- Added preconnect to Google Fonts domain
- Modified font import in index.css to be more performant

### 2. Component Lazy Loading
- Implemented React.lazy and Suspense for route-based code splitting
- Created LoadingFallback component that appears during lazy loading
- Deferred non-critical component rendering with DeferredLoad component
- Moved footer to use DeferredLoad to prioritize main content rendering

### 3. Image Optimization
- Created OptimizedImage component for better image loading with proper TypeScript typing
- Implemented progressive loading with placeholders
- Prioritized above-the-fold images with eager loading
- Added proper decoding attributes (sync/async) based on image priority

### 4. Build Optimizations
- Configured Vite for optimal chunking (vendor, UI libraries)
- Added compression plugins (Gzip, Brotli) for smaller file sizes
- Implemented image optimization with vite-plugin-imagemin with proper SVGO configuration
- Disabled CSS code splitting for faster initial load
- Added terser for better JavaScript minification
- Set up proper rollup configuration for bundle splitting

### 5. Critical Rendering Path
- Removed initial animations from hero section to improve LCP
- Deferred non-critical animations to improve initial render
- Used requestIdleCallback with proper TypeScript types for non-critical initialization
- Converted motion components to static HTML in above-the-fold content

### 6. Resource Hints
- Added preload directives for critical resources in index.html
- Added preconnect for external resources like Google Fonts
- Added appropriate meta tags for performance and description
- Updated document title for better SEO

### 7. TypeScript Optimizations
- Added proper TypeScript definitions for browser APIs like requestIdleCallback
- Fixed type issues in OptimizedImage component for image loading strategies
- Used proper type assertions for HTML attributes to ensure type safety

## Implementation Details

```js
// Font optimization in index.css
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap&font-display=swap");
```

```html
<!-- Resource hints in index.html -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" as="style" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="/src/index.css" as="style" />
```

```tsx
// Lazy loading in App.tsx
const LandingPage = lazy(() => import("./components/LandingPage"));
const Signup = lazy(() => import("./pages/auth/Signup").then(module => ({ default: module.Signup })));
const MainSection = lazy(() => import("./components/MainSection"));
```

```tsx
// requestIdleCallback in main.tsx
declare global {
  interface Window {
    requestIdleCallback(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
    cancelIdleCallback(handle: number): void;
  }
}

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(renderApp)
} else {
  setTimeout(renderApp, 1)
}
```

## Monitoring and Analysis

To analyze bundle size and performance:
```
npm run analyze
```

This will generate a visualization of the bundle size and help identify further optimization opportunities.

## Additional Recommendations

1. Consider implementing a service worker for caching
2. Use HTTP/2 for multiplexed connections
3. Implement server-side rendering for critical content
4. Consider using a CDN for static assets
5. Optimize third-party script loading with async/defer attributes
6. Implement code splitting based on user interaction patterns
7. Consider using Intersection Observer API for deferred loading of off-screen content
8. Add cache headers for static assets 