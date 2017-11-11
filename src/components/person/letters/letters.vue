<template>
  <div class="row">
    <div class="col-md-6">
      <h3>From</h3>
    </div>
    <div class="col-md-6">
      <h3>To</h3>
    </div>
  </div>
</template>

<script>
//  import Vue from 'vue';
//  import { SignInService } from './signin.service';

  export default {
    data() {
      return {
        signin: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      signinClick() {
//        const service = new SignInService();
//        service.signIn(this.signin)
//          .subscribe((data) => {
//            if (data.data.model.token) {
//              localStorage.setItem('jwtToken', data.data.model.token);
//              this.$router.push('/');
//            }
//          });
      },
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
