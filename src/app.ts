// umijs/plugin-initial-state 全局的应用
// 本插件不可直接使用，必须搭配 @umijs/plugin-model 一起使用。
// src/app.ts
import { RequestConfig, useRequest } from 'umi';

export async function getInitialState(): Promise<API.IUser> {
  return Promise.resolve({
    id: 1,
    name: 'huanhuan',
    role: {
      isAdmin: false,
      isEditor: false,
    },
  });
}

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  //   prefix: 'http://jsonplaceholder.typicode.com',
  middlewares: [
    async function middlewareA(ctx, next) {
      console.log('A before');
      await next();
      console.log('A after');
    },
    async function middlewareB(ctx, next) {
      console.log('B before');
      await next();
      console.log('B after');
    },
  ],
  requestInterceptors: [],
  responseInterceptors: [],
};
