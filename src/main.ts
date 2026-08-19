import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/assets/scss/main.scss';

import App from '@/App.vue';
import router from '@/router/router';
import globalComponents from '@/plugins/globalComponents';

createApp(App).use(router).use(createPinia()).use(globalComponents).mount('#app');
