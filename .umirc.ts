import { defineConfig } from 'umi';
const path = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath:'/',
  routes: [
    {
      path: '/', component: '@/layout',routes: [
        {
          path:'/logging',component:'@/pages/logging'
        },
        { component: '@/pages/404' },
      ]
    },
  ],
  alias: {
    '@api': path.resolve(__dirname, 'src/api'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@layout': path.resolve(__dirname, 'src/layout'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@models': path.resolve(__dirname, 'src/models'),
    themes: path.resolve(__dirname, 'src/themes'),
  },
});
