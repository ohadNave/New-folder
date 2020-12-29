<template>
  <div>
    <form v-on:submit.prevent="submitEdit">
      <div class="form-row  col-md-10">
        <div class="form-group col-md-2">
          <label class="formLabel" for="versionInput">Version</label>
          <input
            type="number"
            class="form-control"
            id="versionInput"
            placeholder="Version"
            v-model="note_data_prop.version"
          />
        </div>

        <div class="form-group col-md-3">
          <label class="formLabel" for="authorInput">Author</label>
          <input
            type="text"
            class="form-control"
            id="authorInput"
            placeholder="Author"
            v-model="note_data_prop.author"
          />
        </div>

        <div class="form-group col-md-1.5">
          <label class="formLabel" for="dateInput">Date</label>
          <input
           type="date"
           class="form-control"
           id="dateInput"
           v-model="note_data_prop.date"
            />
        </div>
      </div>

      <div class="form-group col-md-5">
        <label class="formLabel" for="highlightsInputs">Highlights:</label>
        <InputEditComponent :input_subj="'highlights'" :content ="note_data_prop.content.highlights"/>
      </div>
      <br>
      <div class="form-group col-md-5">
        <label class="formLabel" for="featuresInputs">Features</label>
        <InputEditComponent :input_subj="'features'" :content ="note_data_prop.content.features" />
      </div>
      <br>
      <div class="form-group col-md-5">
        <label class="formLabel" for="bugFixesInputs">Bug Fixes:</label>
        <InputEditComponent :input_subj="'bug_fixes'" :content ="note_data_prop.content.bug_fixes" />
      </div> 
      <button type="submit" class="btn btn-info" style="margin-left:20px">
        Save Changes
      </button>
    </form>
  </div>
</template>

<script>
import InputEditComponent from "../components/InputEditComponent";
import { eventBus } from "../main.js";
export default {
  name: "AddNotePage",
  components: {
    InputEditComponent,
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
      eventBus.$on("sendEditedInputs", (...args) => { this.getMultipleInputs(args);});
      eventBus.$on("updateEditedInputs", (...args) => { this.updateInputs(args);});
  },
  methods: {
    getMultipleInputs(args){
      if('highlights'.localeCompare(args[0].subject_) == 0){
        this.form.highlights = []
        this.form.highlights.push(...args[0].inputs_.slice(0,-1))
      }
      if('features'.localeCompare(args[0].subject_) == 0){
        this.form.features = []
        this.form.features.push(...args[0].inputs_.slice(0,-1))
      }
      if('bug_fixes'.localeCompare(args[0].subject_) == 0){
        this.form.bug_fixes = []
        this.form.bug_fixes.push(...args[0].inputs_.slice(0,-1))
      }
    },
    updateInputs(args){
      console.log(args)
      if('highlights'.localeCompare(args[0].subject_) == 0){
        this.form.highlights = []
        this.form.highlights.push(...args[0].inputs_)
      }
      if('features'.localeCompare(args[0].subject_) == 0){
        this.form.features = []
        this.form.features.push(...args[0].inputs_)
      }
      if('bug_fixes'.localeCompare(args[0].subject_) == 0){
        this.form.bug_fixes = []
        this.form.bug_fixes.push(...args[0].inputs_)
      }
    },
async submitEdit() {
      try {
        this.packData()
        console.log(this.note_data_prop.id)
        console.log("IN SUBMIT EDIT")
        console.log(this.form);
        const response = await this.axios.post("http://127.0.0.1:5000/modify_record",this.form);
        //this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data;
      }
    },
    packData(){
      this.form.id = this.note_data_prop.id;
      this.form.version = this.note_data_prop.version;
      this.form.date = this.note_data_prop.date;
      this.form.author = this.note_data_prop.author;
      this.form.highlights = this.note_data_prop.content.highlights;
      this.form.features = this.note_data_prop.content.features;
      this.form.bug_fixes = this.note_data_prop.content.bug_fixes;
    }
  },
    props: {
    note_data_prop: {
      type: Object,
      required: true,
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