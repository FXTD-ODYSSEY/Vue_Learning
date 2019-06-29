import Vue from "vue";
import App from "./App.vue";

import router from './router';

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router,
  // render: h => h(app)
});

// const app = new Vue({
//   router
// }).$mount('#app')