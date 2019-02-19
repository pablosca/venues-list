import Vue from 'vue';
import App from './App.vue';

import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import 'normalize.css';
import '@/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
