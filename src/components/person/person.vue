<template>
  <div>
    <div class="row">
      <div class="col-md-12">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Letters</a></li>
        <li class="breadcrumb-item">Albert Filgas</li>
        <li class="breadcrumb-item active">Saturday, March 23rd, 1941</li>
      </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <ul>
            <li>Chuck Conway
                <ul>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                  <li><a href="#">March 25th, 1944</a></li>
                </ul>
            </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-12">
              <p class="text-center">Albert Filgas <br> Saturday, March 23rd, 1941</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <a href="" class="float-left">< Previous</a>
          </div>
          <div class="col-md-4">
            <p class="text-center">1 of 5</p>
          </div>
          <div class="col-md-4">
            <a href="" class="float-right">Next ></a>
          </div>
        </div>
        <div class="row">
            <img style="display: block; margin: auto; border:1px dotted #999; padding: 5px;" :src="imageSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Component } from 'vue-property-decorator';
  import imageSrc from '../.././../src/assets/letter.png';

  @Component
  export default class Person extends Vue {

    imageSrc = imageSrc;

    name = 'person';

    signin = {
      username: '',
      password: '',
    };

    username = '';
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
