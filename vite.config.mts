import { fileURLToPath } from 'url';

import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.IS_BROWSER': env.IS_BROWSER,
    },
    plugins: [
      legacy({
        targets: [
          'last 2 iOS major versions',
          'last 3 Chrome versions',
          'not IE 11',
        ],
      }),
      react(),
      svgr(),
    ],
    resolve: {
      alias: {
        // for TypeScript path alias import like : @/x/y/z
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
