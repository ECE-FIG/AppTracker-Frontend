import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

import Home from './components/Home.vue';

const routes = [
  { name: 'home', path: '', component: Home }
]

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
