import { createApp } from 'vue'
import router from './route'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
// VUE全家桶
createApp(App)
    .use(router)  // SPA
    .use(pinia)  // 全局状态管理
    .mount('#app')
