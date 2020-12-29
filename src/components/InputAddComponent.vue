<template>
<div>
    <div class="form-group" v-for="(input,k) in inputs" :key="k">
    <input placeholder="insert your text here..." type="text" class="form-control" v-model="input.value">
    <span>
      <i style="color: #17A2B8" class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>
      <i style="color: #17A2B8" class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1">Add</i>
    </span>
  </div>

</div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  name: "DynamicInput",
  components: {
  },
  data () {
    return {
      inputs: [{
        value: '',
      }],
    }
  },
  methods: {
    add () {
      this.inputs.push({})
      eventBus.$emit('sendInputs',{ inputs_: this.inputs, subject_: this.input_subj});
    },

    remove (index) {
      this.inputs.splice(index, 1)
      eventBus.$emit('sendInputs',{ inputs_: this.inputs, subject_: this.input_subj});
    },
  },
  props: {
      input_subj: {
      type: String,
      required: true
    }
  }
};
</script>

