import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
      proxy:{
        "/test/":{
            target: 'http://192.168.1.1/',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^test/, '/a/')
          }
      }
  },
})
