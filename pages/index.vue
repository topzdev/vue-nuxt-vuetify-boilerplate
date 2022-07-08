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
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
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

export default mixins(FooMixin, BarMixin).extend({
  name: "IndexPage",
  components: { NuxtLogo, VuetifyLogo },

  data() {
    return {
      joke: null as null | string,
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
  },

  created() {
    console.log("easy access multi mixins Data", this.foo, this.bar);
  },
});
</script>
