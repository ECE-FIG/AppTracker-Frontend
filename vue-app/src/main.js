import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

import Home from './components/Home.vue';
import History from './components/History.vue';
import Profile from './components/Profile.vue';
import Jobform from './components/Jobform.vue';

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'history', path: '/history', component: History },
  { name: 'profile', path: '/profile', component: Profile },
  { name: 'jobform', path: '/jobform', component: Jobform }
]

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
