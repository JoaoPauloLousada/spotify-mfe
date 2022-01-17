import Vue from 'vue'
import App from './App.vue'

const mount = ({ el }) => {
  if (el) {
    new Vue({
      render: h => h(App),
    }).$mount(el)
  }
}

export { mount }