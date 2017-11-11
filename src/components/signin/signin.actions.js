import { service } from './signin.service';
import Vue from 'vue';
import axios from 'axios';

export const actions = {
  signIn: (credentials) => {
    service.signIn(credentials)
      .subscribe((token) => {
        // set in local storage
        Vue.ls.set('jwtToken', token);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      });
  },
};
