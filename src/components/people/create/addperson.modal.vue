<template>
  <div>
  <button type="button" class="btn-sm btn-primary" @click="showModal" >
    add
  </button>
  <b-modal ref="myModalRef" size="lg" title="Add Person" ok-title="Save" @ok="save()">
    <div>
      <div class="row">
        <div class="col-md-3 form-group">
          <label for="">First Name</label>
          <input type="text" v-model="person.firstName" class="form-control">
        </div>
        <div class="col-md-3 form-group">
          <label for="">Middle Name</label>
          <input type="text" v-model="person.middleName" class="form-control">
        </div>
        <div class="col-md-3 form-group">
          <label for="">Last Name</label>
          <input type="text" v-model="person.surname" class="form-control">
        </div>
        <div class="col-md-3 form-group">
          <label for="">Suffix</label>
          <input type="text" v-model="person.suffix" class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 form-group">
          <label for="">Birthdate</label>
          <div class="row">
            <div class="col-12">
              <input type="text" v-model="person.birthdate.month" class="form-control datepart" placeholder="MM" maxlength="2"  />
              <span class="dateseperator">/</span>
              <input type="text" placeholder="DD" v-model="person.birthdate.day" class="form-control datepart" maxlength="2" />
              <span class="dateseperator">/</span>
              <input type="text" maxlength="4" placeholder="YYYY" v-model="person.birthdate.year" class="form-control datepartyear"  />
            </div>
          </div>
        </div>
        <div class="col-md-4 form-group">
          <label for="">Death Date</label>
          <div class="row">
            <div class="col-12">
              <input type="text" class="form-control datepart" v-model="person.deathdate.month" placeholder="MM" maxlength="2"  />
              <span class="dateseperator">/</span>
              <input type="text" placeholder="DD" v-model="person.deathdate.day" class="form-control datepart" maxlength="2" />
              <span class="dateseperator">/</span>
              <input type="text" maxlength="4" placeholder="YYYY" v-model="person.deathdate.year" class="form-control datepartyear"  />
            </div>
          </div>
        </div>
        <div class="col-md-4 form-group">
          <label for="">Gender</label>
          <select name="gender" v-model="person.gender" class="form-control" id="gender" >
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Unknown</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-12 form-group">
          <label for="">Story</label>
          <textarea name="story" id="story" v-model="person.story" style="width:100%;height: 100px;" class="form-control"></textarea>
        </div>
      </div>
    </div>
  </b-modal>
  </div>
</template>
<script>
  import PersonService from './addperson.service';

  export default {
    data: () => ({
      person: {
        firstName: null,
        middleName: null,
        surname: null,
        suffix: null,
        gender: null,
        story: null,
        birthdate: {
          month: null,
          day: null,
          year: null,
        },
        deathdate: {
          month: null,
          day: null,
          year: null,
        },
      },
    }),
    methods: {
      showModal() {
        this.$refs.myModalRef.show();
      },
      hideModal() {
        this.$refs.myModalRef.hide();
      },
      save() {
        PersonService.addPerson(this.person);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  span.dateseperator {
    padding-left: 5px;
    padding-right: 5px;
  }

  input.datepart {
    width:50px;
    display:inline;
  }

  input.datepartyear {
    width:70px;
    display:inline;
  }

</style>
