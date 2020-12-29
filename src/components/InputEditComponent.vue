<template>
  <div>
    <div class="form-group" v-for="(input, k) in rel_content" :key="k">
      <input type="text" size="280" class="form-control col-md-21" placeholder="insert your text here..." v-model="rel_content[k]" />
      <span>
        <i
          class="fas fa-minus-circle"
          @click="remove(k)"
          style="color: #17A2B8"
          v-show="k || (!k && rel_content.length > 1)"
          >Remove</i
        >
        <i
          class="fas fa-plus-circle"
          style="color: #17A2B8"
          @click="add(k)"
          v-show="k == rel_content.length - 1"
          >Add</i
        >
      </span>
    </div>
    <i
      class="fas fa-plus-circle"
      @click="add(0)"
      v-show="0 == rel_content.length"
      >Add</i
    >
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "DynamicInput",

  components: {},

  data() {
    return {
      rel_content: [{}],
    };
  },
  mounted() {
    this.rel_content = this.content;
  },

  methods: {
    add() {
      this.rel_content.push("");
      eventBus.$emit("sendEditedInputs", {
        inputs_: this.rel_content,
        subject_: this.input_subj,
      });
    },

    remove(index) {
      this.rel_content.splice(index, 1);
      eventBus.$emit("updateEditedInputs", {
        inputs_: this.rel_content,
        subject_: this.input_subj,
      });
    },
  },
  props: {
    input_subj: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      required: false,
    },
  },
};
</script>
