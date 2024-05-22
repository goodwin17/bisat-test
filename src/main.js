import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/styles/common.scss';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
