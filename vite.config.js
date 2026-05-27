/*
 * @Description:
 * @Author: Bei
 * @Date: 2026-05-26 13:39:22
 * @LastEditTime: 2026-05-26 16:44:10
 * @LastEditors: Bei
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      proxy: {
        '/api/qwen': {
          target: 'https://dashscope.aliyuncs.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/qwen/, ''),
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              proxyReq.setHeader('Authorization', `Bearer ${env.VITE_APP_QWEN_KEY}`)
            })
          },
        },
      },
    },
  }
})
