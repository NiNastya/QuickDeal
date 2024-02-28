import { createApp } from 'vue'
import router from "./router";
import './assets/scss/main.scss'
import store from "./store";
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
