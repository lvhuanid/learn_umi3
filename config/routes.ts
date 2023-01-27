// config/routes.ts

export default [
  { name: 'overview', exact: true, path: '/1', component: 'index' },
  {
    name: 'overview',
    path: '/',
    component: '@/layouts/index',
    // access: 'isAdmin',
    routes: [
      { name: 'overview', exact: true, path: '/user', component: 'user' },
      { name: 'userInfo', exact: true, path: '/userInfo', component: 'user' },
    ],
  },
];
