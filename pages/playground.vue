<template>
  <v-row>
    <v-col cols="12">
      <h2>System App Dialog</h2>
      <v-btn color="primary" large @click="showAppDialog"
        >Show App Dialog</v-btn
      >
    </v-col>
    <v-col cols="12">
      <h2>System App Snackbar</h2>
      <v-btn color="primary" large @click="showAppSnackbar"
        >Show App Snackbar</v-btn
      >
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  methods: {
    showAppDialog() {
      this.$accessor.system.showAppDialog({
        title: "This is App Dialog",
        message: `Here's the description of app dialog`,
        show: true,
        button: {
          yesLabel: "Okay",
          yesFunction: ({ hideDialog }) => {
            alert("Clicked yes function here");
            hideDialog();
          },
          noLabel: "Cancel",
          noFunction: ({ hideDialog }) => {
            alert("Clicked no function here");
            hideDialog();
          },
        },
      });
    },

    showAppSnackbar() {
      this.$accessor.system.showSnackbar({
        timeout: 10000,
        color: "primary",
        show: true,
        message: "Hi you okay chad?",
      });
    },
  },
});
</script>

<style></style>
