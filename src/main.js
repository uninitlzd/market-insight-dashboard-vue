import { createApp } from 'vue'
import './tailwind.css'
import './app.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import moment from 'moment'

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      // check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

const app = createApp(App).directive("click-outside", clickOutside)

app.config.globalProperties.$filters = {
  formatDate(date, format = 'DD MMMM YYYY') {
    return moment(date).format(format)
  }
}

import VueFinalModal from 'vue-final-modal'

app.use(VueFinalModal())

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
