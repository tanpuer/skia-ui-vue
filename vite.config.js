import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { parseCSS} from './src/renderer/cssParser.js'


// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['SkiaUI'],
    },
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
    // {
    //   name: 'css-to-js',
    //   transform(code, id) {
    //     if (id.endsWith('.css')) {
    //       const styleMap = parseCSS(code);
    //       return `export default ${JSON.stringify(styleMap, null, 2)};`;
    //     }
    //   }
    // }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
