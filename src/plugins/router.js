import Vue from 'vue';
import Router from 'vue-router';
import Join from '@/components/join/join';
import SignIn from '@/components/signin/signin';
import Person from '@/components/person/person';
import People from '@/components/people/people';
// import Letters from '@/components/letters/letters';
// import LetterUpload from '@/components/letters/upload/upload';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/join', name: 'join', component: Join },
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/person', name: 'person', component: Person },
    { path: '/people', name: 'people', component: People },
    //{ path: '/letters/upload', name: 'letterupload', component: LetterUpload },
  ],
});
