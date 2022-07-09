<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <SettingsSidebar />
      </v-col>

      <v-col>
        <Nuxt />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import SettingsSidebar from "../components/pages/settings/SettingsSidebar.vue";

export default Vue.extend({ components: { SettingsSidebar } });
</script>

<style></style>
