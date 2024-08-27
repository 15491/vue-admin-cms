import { createApp } from 'vue'
import pinia from './stores/index'
import App from './App.vue'
import router from './router'
import { registerIcon } from "@/global/registerIcon"

import '@/assets/css/main.css'
import 'virtual:uno.css'

// 全局注册
// import 'element-plus/dist/index.css'

const app = createApp(App)

// icon 引入
app.use(registerIcon)
app.use(pinia)
app.use(router)

app.mount('#app')
