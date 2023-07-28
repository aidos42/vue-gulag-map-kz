import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import App from './App.vue';
import MainPage from './views/MainPage.vue';
import ArticlesPage from './views/ArticlesPage.vue';
import AboutPage from './views/AboutPage.vue';
import './styles.css';
import 'leaflet/dist/leaflet.css';

const routes = [
  { path: '/', component: MainPage },
  { path: '/articles', component: ArticlesPage },
  { path: '/about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.component('LMap', LMap);
app.component('LTileLayer', LTileLayer);
app.mount('#app');
