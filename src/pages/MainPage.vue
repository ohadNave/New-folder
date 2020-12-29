<template>
  <div>
        <div class="container">
       <router-link id="addBtn" class="btn btn-info" :to="{ name: 'addNote' }" tag="button">Add Release Note</router-link>
    </div>
    <NotesList/>
  </div>
</template>

<script>
import NotesList from "../components/NoteListComponent"
import { eventBus } from "../main.js";
export default {
  name: "Main",
  components: {
    NotesList
  },
  data() {
    return {
    
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
#addBtn {
  margin-top: 25px;
  float:right;
}
</style>
