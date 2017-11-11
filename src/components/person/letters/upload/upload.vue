<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div style="border-bottom:1px dotted #ccc; margin-bottom: 20px;">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" value="Chuck Conway">
              </div>
            </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Date</label>
                  <input type="text" class="form-control" value="10/10/1945">
                </div>
              </div>
            </div>
           <div class="row">
              <div class="col-md-12">
                  <div class="form-group">
                    <label>File Name</label>
                    <p>Chuck Conway - 10.10.1945</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
          <button class="btn btn-default float-right" type="button">Upload</button>
        <div class="row">
          <dropzone style="width: 100%; min-height: 200px;" v-on:vdropzone-file-added="fileadded" v-on:vdropzone-removed-file="fileremoved" :use-font-awesome="true" :auto-process-queue="false" id="myVueDropzone"  url="https://chuckconway.com/post" v-on:vdropzone-success="showSuccess">
            <!-- Optional parameters if any! -->
            <input type="hidden" name="token" value="xxx">
          </dropzone>
          <!--<div style="border:2px #ccc dashed; width: 100%;min-height: 200px;"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue';
  // import { Component } from 'vue-property-decorator';
  import Dropzone from 'vue2-dropzone';


  // @Component
  export default {

    data: {
      options: {
        autoProcessQueue: false,
      },
    },
    components: {
      Dropzone,
    },
    methods: {
      fileadded(file) {
        console.log(file);
      },
      fileremoved(file, error, xhr) {
        console.log(file);
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
