import { createApp } from 'vue';
import App from './app.vue';
import TuViewPlus from '@tu-view-plus/components';
import './reset.scss';

//按需
// import { TuButton, TuRadio, TuTooltip } from '@tu-view-plus/components';

const app = createApp(App);

app.use(TuViewPlus);

//按需
// app.use(TuButton);
// app.use(TuRadio);
// app.use(TuTooltip);

app.mount('#app');
