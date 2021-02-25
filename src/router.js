import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // redirect to home page
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: null },
    {
      path: '/coaches:id', component: null, children: [
        // /coaches/id/contact
        { path: '/contact', component: null }
      ]
    },
    { path: '/register', component: null },
    { path: '/requests', component: null },
    // when a random url is provided
    { path: '/:notFound(.*)', component: null },
  ]
});

export default router;