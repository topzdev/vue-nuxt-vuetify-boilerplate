import Vue from "vue";

const BarMixin = Vue.extend({
  data() {
    return {
      bar: "test",
    };
  },
});

export default BarMixin;
