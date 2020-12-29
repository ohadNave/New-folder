<template>
  <div>
    <div class="container">
      <br>
      <br>
    <form v-on:submit.prevent="submitForm">
      <!-- Version,Author,Date -->
      <div class="form-row  col-md-10">
        <div class="form-group col-md-3">
          <label class="formLabel" for="versionInput">Version</label>
          <input
            type="number"
            class="form-control"
            id="versionInput"
            placeholder="Version"
            v-model="form.version"
          />
        </div>

        <div class="form-group col-md-3">
          <label class="formLabel" for="authorInput">Author</label>
          <input
            type="text"
            class="form-control"
            id="authorInput"
            placeholder="Author"
            v-model="form.author"
          />
        </div>

        <div class="form-group col-md-1.5">
          <label class="formLabel" for="dateInput">Date</label>
          <input
           type="date"
           class="form-control"
           id="dateInput"
           v-model="form.date"
            />
        </div>
      </div>

      <!-- Highlights -->
      <div class="form-group col-md-5">
        <label class="formLabel" for="highlightsInputs">Highlights</label>
        <InputAddComponent :input_subj="'highlights'" />
      </div>

      <div class="form-group col-md-5">
        <label class="formLabel" for="featuresInputs">Features</label>
        <InputAddComponent :input_subj="'features'"  />
      </div>

      <div class="form-group col-md-5">
        <label class="formLabel" for="bugFixesInputs">Bug Fixes:</label>
        <InputAddComponent :input_subj="'bug_fixes'" />
      </div>
      <button type="submit" class="btn btn-info" style="margin-left:20px">
        Add Release Note
      </button>
    </form>
    </div>
  </div>
</template>

<script>
import InputAddComponent from "../components/InputAddComponent";
import { eventBus } from "../main.js";
export default {
  name: "AddNotePage",
  components: {
    InputAddComponent,
  },
  data() {
    return {
      form: {
        version: "",
        author: "",
        date: "",
        highlights: [],
        features: [],
        bug_fixes: [],
      },
    };
  },
  mounted(){
      eventBus.$on("sendInputs", (...args) => { this.getMultipleInputs(args);});
      eventBus.$on("updateInputs", (...args) => { this.updateInputs(args);});
  },
  methods: {
    getMultipleInputs(args){
      console.log(args)
      if('highlights'.localeCompare(args[0].subject_) == 0){
        this.form.highlights = []
        this.form.highlights.push(...args[0].inputs_.slice(0,-1))
        console.log(this.form.highlights)
      }
      if('features'.localeCompare(args[0].subject_) == 0){
        this.form.features = []
        this.form.features.push(...args[0].inputs_.slice(0,-1))
        console.log(this.form.features)
      }
      if('bug_fixes'.localeCompare(args[0].subject_) == 0){
        this.form.bug_fixes = []
        this.form.bug_fixes.push(...args[0].inputs_.slice(0,-1))
        console.log(this.form.bug_fixes)
      }
    },
    updateInputs(args){
      console.log(args)
      if('highlights'.localeCompare(args[0].subject_) == 0){
        this.form.highlights = []
        this.form.highlights.push(...args[0].inputs_)
        console.log(this.form.highlights)
      }
      if('features'.localeCompare(args[0].subject_) == 0){
        this.form.features = []
        this.form.features.push(...args[0].inputs_)
        console.log(this.form.features)
      }
      if('bug_fixes'.localeCompare(args[0].subject_) == 0){
        this.form.bug_fixes = []
        this.form.bug_fixes.push(...args[0].inputs_)
        console.log(this.form.bug_fixes)
      }
    },
    submitForm() {
      this.axios
        .post("http://127.0.0.1:5000/add_note_record", this.form)
        .then((res) => {
           if (res.status == 200) {
          console.log(response.data)
          //this.notes.push(...response_data);
          //this.$forceUpdate();
        }
        })
        .catch((error) => {
          // error.response.status Check status code
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>
<style scoped>
.formLabel{
  font-weight: bold;
  color: #17A2B8;
}
</style>