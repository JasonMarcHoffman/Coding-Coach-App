import { createRouter, createWebHistory } from 'vue-router'

// importing page components:
import NotFound from './pages/NotFound.vue'
// Coaches:
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachesDetail from './pages/coaches/CoachesDetail.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
// Requests:
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // redirect to home page
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches:id',
      component: CoachesDetail,
      children: [
        // /coaches/id/contact
        { path: '/contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    // when a random url is provided
    { path: '/:notFound(.*)', component: NotFound },
  ]
});

export default router;