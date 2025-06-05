import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './app/router'
import './shared/config/theme/base.css'
import './shared/config/theme/variables.css'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
