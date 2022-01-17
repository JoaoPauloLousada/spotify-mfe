import Vue from 'vue'
import { mount } from './module';
// import App from './App.vue'

Vue.config.productionTip = false

const el = document.getElementById('app');
mount(el);
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
