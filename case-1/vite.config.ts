import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@design-system": '/src/design-system',
      components: '/src/components',
      constants: '/src/constants',
      pages: '/src/pages',
      styles: '/src/styles',
    },
  },
})
