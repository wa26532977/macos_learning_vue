import { createApp } from 'vue'
import App from './App.vue'
// import App from 'components/section15/App'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
