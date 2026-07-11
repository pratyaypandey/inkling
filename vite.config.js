import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The React Compiler auto-memoizes every component, so the render tree stays
// referentially stable across the one bit of state on the page (the "we" toggle).
// For a page this small it's overkill in the best way: zero manual memo, no wasted work.
export default defineConfig({
  base: './',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
      },
    }),
  ],
  build: {
    target: 'es2022',
  },
})
