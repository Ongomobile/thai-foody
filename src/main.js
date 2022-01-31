import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const thaiFoody = createApp(App)
thaiFoody.use(router)
thaiFoody.mount('#app')
