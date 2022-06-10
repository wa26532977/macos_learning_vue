import { createApp } from 'vue'
// import App from './App.vue'
import Section16App from "@/views/Section16App";
// import App from 'components/section15/App'
// import router from './router'
import router from './router/section16router'
// import store from './store'
// import store from './store/challengeStore'
import store from './store/section16store/index'
// import BaseCard from "@/components/section16/components/UI/BaseCard";
// import BaseBadge from "@/components/section16/components/UI/BaseBadge";
// import BaseButton from "@/components/section16/components/UI/BaseButton";

createApp(Section16App).use(store).use(router).mount('#app')
