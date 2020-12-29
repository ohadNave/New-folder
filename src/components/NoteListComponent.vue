<template>
<div class="container">
      <b-row v-for="(r,index) in notes" :key="index">
        <div>
          <br>
          <br>
           <NoteComponent :note_data="r" class="row"/>
        </div>
        <br>
      </b-row>
 
</div>
</template>

<script>
import { eventBus } from "../main.js";
import NoteComponent from "./NoteComponent";

export default {
  name: "NoteListComponent",
  components: {
    NoteComponent
  },

  data() {
    return {
      notes: [],
    };
  },
  async mounted(){
       eventBus.$on("fireMethod", () => {
       this.get_all_notes();
    });
       this.get_all_notes();
  },

  methods:{
    async get_all_notes(){
       const response = await this.axios.get(
        "http://127.0.0.1:5000/get_all_records");
        if (response.status == 200) {
          const response_data = response.data;
          console.log(response_data)
          this.notes.push(...response_data);
          this.$forceUpdate();
        }
    },
  },
  props: {
  }
};
</script>

<style lang="scss" scoped>
</style>
