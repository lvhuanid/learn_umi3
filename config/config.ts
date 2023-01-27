// config/config.ts

import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  layout: {},
  mfsu: {},
  fastRefresh: {},
});
