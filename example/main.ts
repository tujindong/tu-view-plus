import { createApp } from 'vue';
import App from './app.vue';
import TuViewPlus from '@tu-view-plus/components';

const app = createApp(App);
app.use(TuViewPlus);

app.mount('#app');
