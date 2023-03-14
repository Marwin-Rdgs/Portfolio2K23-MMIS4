import { createApp } from 'vue'
import Vue3Autocounter from 'vue3-autocounter';
import App from './App.vue'
import './index.css'
import router from './router'

import 'animate.css';

const app = createApp(App)
.component('vue3-autocounter', Vue3Autocounter)

app.use(router)

app.mount('#app')
