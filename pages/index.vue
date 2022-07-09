<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vue 2 with Nuxt and Vuetify by Dev404
        </v-card-title>
        <v-card-text v-if="joke">
          <h2>Daily Jokes (Just testing API)</h2>
          <p class="mt-2" v-html="joke"></p>
        </v-card-text>
        <v-card-actions>
          <v-btn large :to="pageRoutes.playground.to" color="primary"
            >To Playground
            <v-icon right>{{ pageRoutes.playground.icon }}</v-icon></v-btn
          >
          <v-btn large @click="gotoSettings" color="primary"
            >To Settings
            <v-icon right>{{ pageRoutes.settings.icon }}</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import jokesApi from "~/api/jokes.api";
import NuxtLogo from "~/components/pages/homepage/NuxtLogo.vue";
import VuetifyLogo from "~/components/pages/homepage/VuetifyLogo.vue";

import mixins from "vue-typed-mixins";
import BarMixin from "../mixins/bar.mixin";
import FooMixin from "../mixins/foo.mixin";
import pageRoutes from "@/configs/page-route.config";

export default mixins(FooMixin, BarMixin).extend({
  name: "IndexPage",
  components: { NuxtLogo, VuetifyLogo },

  data() {
    return {
      joke: null as null | string,
      pageRoutes,
    };
  },

  async fetch() {
    await this.fetchJoke();
  },
  methods: {
    async fetchJoke() {
      const response = await jokesApi.getDailyJokes();
      this.joke = response.contents.jokes[0].joke.text;
    },

    // using page route config on router push
    gotoSettings() {
      this.$router.push(this.pageRoutes.settings.to);
    },
  },

  created() {
    console.log("easy access multi mixins Data", this.foo, this.bar);
  },
});
</script>
