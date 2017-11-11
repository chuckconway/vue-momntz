<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <h3>Sign in to Momntz</h3>
      <form style="margin-top: 20px;">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-validate="'required'" :class="{'is-invalid': errors.has('username') }" name="username" type="text" v-model="signin.username" class="form-control" id="username" aria-describedby="username" >
          <div v-show="errors.has('username')" class="invalid-feedback">
            {{errors.first('username')}}
          </div>
        </div>
        <div class="form-group">
          <label for="Confirm">Password</label>
          <input type="password" v-model="signin.password" class="form-control" id="confirm" >
        </div>
        <button type="submit" @click.prevent="signinClick()" class="btn btn-primary float-sm-right">Sign In</button>
      </form>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
  // import Vue from 'vue';
  import SignInService from './signin.service';

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
        // const service = new SignInService();
        SignInService.signIn(this.signin)
          .subscribe((data) => {
            if (data.data.model.token) {
              localStorage.setItem('jwtToken', data.data.model.token);
              this.$router.push('/');
            }
          });
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
