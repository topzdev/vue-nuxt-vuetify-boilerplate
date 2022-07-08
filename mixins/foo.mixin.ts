import Vue from "vue";

const FooMixin = Vue.extend({
  data() {
    return {
      foo: "test",
    };
  },
});

export default FooMixin;
