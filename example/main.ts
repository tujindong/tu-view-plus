import { createApp } from 'vue';
import App from './app.vue';
import TuViewPlus from '@tu-view-plus/components';

//按需
// import { TuButton } from 'tu-view-plus';

const app = createApp(App);
app.use(TuViewPlus);

//按需
// app.use(TuButton);

app.mount('#app');
