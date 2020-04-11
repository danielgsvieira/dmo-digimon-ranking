<template>
  <v-app id="app">
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  created(): void {
    this.$store.dispatch('initStore');
  },
});
</script>
