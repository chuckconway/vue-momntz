import Vue from 'vue';
import axios from 'axios';
import * as alertifyjs from 'alertifyjs/build/alertify';
import _ from 'lodash';
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue';

// import AddPerson from '@/components/people/create/addperson.modal';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'alertifyjs/build/css/alertify.css';
import './assets/styles.css';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import App from './App';
import router from './plugins/router';
import store from './store/store';


// Vue.use(VueLocalStorage, {
//   name: 'ls',
// });
Vue.use(VeeValidate);
Vue.use(BootstrapVue);

// Vue.component('add-person', AddPerson);

axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('jwtToken')}`;

Vue.config.productionTip = false;
alertifyjs.set('notifier', 'position', 'top-right');
alertifyjs.set('notifier', 'delay', 60);
alertifyjs.defaults.transition = 'slide';
alertifyjs.defaults.theme.ok = 'btn btn-primary';
alertifyjs.defaults.theme.cancel = 'btn btn-danger';
alertifyjs.defaults.theme.input = 'form-control';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});

axios.interceptors.response.use(response =>
  // Do something with response data
   response, (error) => {
  const data = error.response.data;

  if (data && data.dispatches) {
    _.forEach(data.dispatches, (d) => {
      if (d.dispatchType.id === 2) { // 2 is an error
        alertifyjs.error(d.message);
      }
    });
  }
});
