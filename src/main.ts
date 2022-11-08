import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/base.css'
import 'assets/css/normalize.css'

createApp(App).use(router).mount('#app')
