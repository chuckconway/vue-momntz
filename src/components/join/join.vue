<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" :class="{'is-invalid': errors.has('username') }" v-validate="'required'" name="username" v-model="join.username" class="form-control" id="username" aria-describedby="username" >
          <div v-show="errors.has('username')" class="invalid-feedback">
            {{errors.first('username')}}
          </div>
        </div>
        <div class="form-group">
          <label for="firstname">First Name</label>
          <input type="text" :class="{'is-invalid': errors.has('firstname') }" v-validate="'required'" name="firstname" v-model="join.firstName" class="form-control" id="firstname" aria-describedby="firstname" >
          <div v-show="errors.has('firstname')" class="invalid-feedback">
            {{errors.first('firstname')}}
          </div>
        </div>
        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input type="text"v-validate="'required'" :class="{'is-invalid': errors.has('lastname') }"  name="lastname" v-model="join.lastName" class="form-control" id="lastname" aria-describedby="lastname" >
          <div v-show="errors.has('lastname')" class="invalid-feedback">
            {{errors.first('lastname')}}
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-validate="'required'" :class="{'is-invalid': errors.has('email') }"  name="email" v-model="join.email" class="form-control" id="email" aria-describedby="emailHelp" >
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          <div v-show="errors.has('email')" class="invalid-feedback">
            {{errors.first('email')}}
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-validate="'required'" :class="{'is-invalid': errors.has('password') }" id="password" name="password" v-model="join.password" class="form-control" >
          <div v-show="errors.has('password')" class="invalid-feedback">
            {{errors.first('password')}}
          </div>
        </div>
        <div class="form-group">
          <label for="Confirm">Confirm Password</label>
          <input type="password" v-validate="'required|confirmed:password'" :class="{'is-invalid': errors.has('confirm') }" name="confirm" v-model="join.confirm" class="form-control" id="confirm" >
          <div v-show="errors.has('confirm')" class="invalid-feedback">
            {{errors.first('confirm')}}
          </div>
        </div>
        <button type="submit" @click.prevent="joinClick()" class="btn btn-primary float-sm-right">Join</button>
      </form>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>

  import * as alertify from 'alertifyjs/build/alertify';
  import JoinService from './join.service';


  export default {
    data() {
      return {
        join: {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirm: '',
        },
      };
    },

    methods: {
      joinClick() {
        const joinService = new JoinService();

        joinService.join(this.join)
          .subscribe((r) => {
            alertify.success('Join', `We've created your account. ${r.firstName}`);
            this.$router.push('dashboard');
          });
      },
    },
  };

</script>
