<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="3">
          <h2>System App Dialog</h2>
          <v-btn color="primary" large @click="showAppDialog"
            >Show App Dialog</v-btn
          >
        </v-col>
        <v-col cols="3">
          <h2>System App Snackbar</h2>
          <v-btn color="primary" large @click="showAppSnackbar"
            >Show App Snackbar</v-btn
          >

          <code> </code>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <h2>WYSIWYG</h2>
          <editor-field v-model="editor" />

          <div class="mt-2">
            <h5>Content</h5>
            <span v-html="editor"></span>
          </div>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col cols="6">
          <h2>Vuetify Date Time Picker</h2>
          <DateTimePicker v-model="datetime" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import EditorField from "@/components/inputs/EditorField.vue";
import DateTimePicker from "../components/inputs/DateTimePicker.vue";

export default Vue.extend({
  components: {
    EditorField,
    DateTimePicker,
  },

  data() {
    return {
      editor: "",
      datetime: "",
    };
  },

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
