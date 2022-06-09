import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsList from "../components/section15Challenge/pages/ProductsList";
// import ProductsList from "@/components/section15Challenge/pages/ProductsList";
import UserCart from "../components/section15Challenge/pages/UserCart";
import ShopAdmin from "../components/section15Challenge/pages/ShopAdmin";

const routes = [
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin },
    {
        path: '/',
        name: '15Challenge',
        // component: () => import('../views/Section15ChallengeApp')
        redirect: "/products"
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/r',
        name: 'redirect',
        redirect: '/teams'
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/teams',
        name: 'teams',
        meta: {needsAuth: true},
        components: {
            default: () => import('../components/section13/teams/TeamList.vue'),
            footer: () => import('../components/section13/teams/TeamFooter.vue')
        },
        alias: '/t',
        children: [
            {
                path: ':id',
                component: () => import('../components/section13/teams/TeamMembers.vue'),
                props: true,
                name: 'team_member'
            }
        ]
    },
    {
        path: '/users',
        name: 'users',
        components: {
            default: () => import('../components/section13/users/UserList.vue'),
            footer: () => import('../components/section13/users/UserFooter.vue')
        },
        // beforeEnter(to, from, next) {
        //     console.log(to, from)
        //     next()
        // }
    },
    // {
    //     path: '/teams/:id',
    //     name: 'team',
    //     component: () => import('../components/section13/teams/TeamMembers.vue'),
    //     props: true
    // },
    {
        path: '/:notFound(.*)',
        component: () => import('../components/section13/nav/NotFound.vue')
        // redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, saved)
        if (savedPosition) {
            return savedPosition
        }
        return {left: 0, top: 0}
    }
})

router.beforeEach((to, from, next) => {
    // console.log("Globe")
    if (to.meta.needsAuth) {
        console.log("this needs auth")
    }
    // console.log(to, from)
    // cancel all route
    // next(false)
    // always on team member t2
    // if (to.name === 'team_member'){
    //     next()
    // } else{
    //     next({name: 'team_member', params: {id: 't2'}})
    // }
    next()
})

// router.afterEach((to, from) => {
//     console.log("after Each")
//     console.log(to, from)
//     // sending analytics data
// })

export default router
