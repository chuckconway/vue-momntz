<template>
  <div class="row">
    <div class="col-md-12">
      <div>
        <h2 class="float-left">People</h2>
        <add-person class="float-right"></add-person>
        <br style="clear: both;">
      </div>
      <!--<add-person></add-person>-->

      <ul>
        <li>Chuck Conway</li>
        <li>John Conway</li>
        <li>Erin Meraz</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import AddPerson from '@/components/people/create/addperson.modal';

  export default {
    components: {
      'add-person': AddPerson,
    },
    name: 'hello',
    data() {
      return {
        showModal: false,
      };
    },
    methods: {

    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
