import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
      proxy:{
        "/api/":{
            target: 'http://localhost/',
            changeOrigin: true,
            //rewrite: (path) => path.replace(/^test/, '/a/')
          }
      }
  },
  css: {
    //requireModuleExtension: false,
    requireModuleExtension:false,
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: {},
        // `primary` is global variables fields name
        globalVars: {}
      },
    }
  }
})
