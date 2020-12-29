<template>
<div>
<div>
<div class="card border-info mb-3" style="max-width: 40rem;">
  <div class="card-header">
          <div>
        <span class="delModBtns">
          <h2 class="date">{{note_data.date}}</h2>
          <button id="btns" class="btn btn-info" @click="deleteNote(note_data.id)">Delete</button>
           <router-link id="btns" class="btn btn-info" :to="{ name: 'edit', params: { note_Id: note_data.id} }" tag="button">Modify</router-link>
        </span>
      </div>
  </div>
  
  <div class="card-body text-info">
    <h2 class="card-title">Version: {{note_data.version}}</h2>
    <br>
    <p class="card-text">
     <b>Highlights:</b>
     <br>
              <ul>
                <b-row v-for="(r) in note_data.content.highlights" :key="r.highlight"><li>{{r}} </li>  </b-row>
              </ul>
      <b>Features: </b> 
              <ul>
              <b-row v-for="a in note_data.content.features" :key="a.feature"><li>{{a}} </li></b-row>
              </ul>
      <b>Bug Fixes:</b>
               <ul>
                <b-row v-for="b in note_data.content.bug_fixes" :key="b.bug_fix"><li> {{b}}</li> </b-row>
                 </ul> 
                  <b>Author: </b> {{note_data.author}}
    </p>
  </div>
</div>
</div>

    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  data() {
    return {
    };
  },
  methods: {
    async deleteNote(id) {
      console.log("in deleteNote")
      const response = await this.axios.get(
        `http://127.0.0.1:5000/delete_record?id=${id}`
      );
    }
  },
  props: {
    note_data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

#btns{
    margin-left:5px;
    float:right;
}

.date{
    color: #17A2B8;
    display:table-cell; vertical-align:middle;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 750;

}

</style>