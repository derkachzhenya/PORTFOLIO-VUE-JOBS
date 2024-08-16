import './style.css';
import './assets/main.css';
import 'primeicons/primeicons.css';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Путь к вашему маршрутизатору

const app = createApp(App);
app.use(router);
app.mount('#app');