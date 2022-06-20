import {createRouter, createWebHistory} from "vue-router";

const routes = [
    { path: '/', name: "App", components: () => import('../views/Section19App')}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router