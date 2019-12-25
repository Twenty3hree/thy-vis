import Vue from 'vue'
import App from './App.vue'
import resource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(resource);
Vue.http.options.root = 'http://localhost:3000/';
Vue.http.options.emulateJson = true;

new Vue({
  render: h => h(App),
}).$mount('#app')
