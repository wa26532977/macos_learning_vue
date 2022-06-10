import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', redirect: '/coaches'},
    { path: '/coaches', name: "coaches", component: () => import('../components/section16/pages/coaches/CoachesList') },
    { path: '/coaches/:id', name: 'coach', props: true, component: () => import('../components/section16/pages/coaches/CoachDetail'),
        children: [{ path: 'contact', component: () => import('../components/section16/pages/requests/ContactCoach')}]
    },
    { path: '/register', name: 'register',component: () => import('../components/section16/pages/coaches/CoachRegistration')},
    { path: '/requests', name: 'requests',component: () => import('../components/section16/pages/requests/RequestedReceived')},
    { path: '/:notFound(.*)', name: 'notFound', component: () => import('../components/section16/pages/NotFound')},

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,

})

export default router