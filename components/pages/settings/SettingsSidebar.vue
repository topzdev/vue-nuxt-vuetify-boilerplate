<template>
  <v-card width="300" flat outlined>
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in links"
          :key="i"
          :to="item.to"
          link
          replace
          :color="item.color"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import mixins from "vue-typed-mixins";
import pageRoutes from "../../../configs/page-route.config";
export default Vue.extend({
  computed: {
    links() {
      return Object.values(pageRoutes.settings.subpages);
    },
  },
});
</script>

<style></style>
