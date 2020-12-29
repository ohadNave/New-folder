<template>
<div class="container">
  <br>
        <NoteEditableComponent :note_data_prop="note_data" class="row"/>
</div>
</template>

<script>
import { eventBus } from "../main.js";

 import NoteEditableComponent from "../components/NoteEditableComponent";

export default {
  name: "EditNotePage",
  components: {
     NoteEditableComponent
  },

  data() {
    return {
      note_data: {},
    };
  },
  async mounted(){
    this.get_note()
  },

  methods:{
    async get_note(){
      const id=this.$route.params.note_Id;
      const response = await this.axios.get(
        `http://127.0.0.1:5000/get_note_record?id=${id}`);
        if (response.status == 200) {
          this.note_data = response.data;
        }
    }
  },
};
</script>


