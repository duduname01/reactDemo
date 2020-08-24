import { defineConfig } from 'umi';
const path = require('path');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/aa', component: '@/pages/logging' },
  ],
  alias: {
    '@api': path.resolve(__dirname, 'src/api'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@component': path.resolve(__dirname, 'src/component'),
    '@layout': path.resolve(__dirname, 'src/layout'),
    '@util': path.resolve(__dirname, 'src/util'),
    '@models': path.resolve(__dirname, 'src/models'),
  },
});
