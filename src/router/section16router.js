import {createRouter, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";
import store from '../store/section16store/index'

const routes = [
    {path: '/', redirect: '/coaches'},
    {path: '/coaches', name: "coaches", component: () => import('../components/section16/pages/coaches/CoachesList')},
    {
        path: '/coaches/:id',
        name: 'coach',
        props: true,
        component: defineAsyncComponent(() => import('../components/section16/pages/coaches/CoachDetail')),
        children: [{path: 'contact', component: () => import('../components/section16/pages/requests/ContactCoach')}]
    },
    {
        path: '/register',
        name: 'register',
        component: defineAsyncComponent(() => import('../components/section16/pages/coaches/CoachRegistration')),
        meta: {requiresAuth: true, notRegistered: true}
    },
    {
        path: '/requests',
        name: 'requests',
        component: defineAsyncComponent(() => import('../components/section16/pages/requests/RequestedReceived')),
        meta: {requiresAuth: true}
    },
    {
        path: '/auth',
        name: 'auth',
        component: defineAsyncComponent(() => import ('../components/section16/pages/auth/UserAuth')),
        meta: {requiresUnAuth: true}
    },
    {path: '/:notFound(.*)', name: 'notFound', component: () => import('../components/section16/pages/NotFound')},


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.notRegistered && store.getters.getIsCoach) {
        next('/coaches')
    } else if (to.meta.requiresAuth && !store.getters.getIsLogin) {
        next('/auth')
    } else if (to.meta.requiresUnAuth && store.getters.getIsLogin) {
        next('/coaches')
    } else {
        next()
    }

})

export default router