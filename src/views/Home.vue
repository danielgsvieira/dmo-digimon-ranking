<template>
  <digimon-table></digimon-table>
</template>

<script lang="ts">
import Vue from 'vue';
import DigimonTable from '../components/DigimonTable.vue';

export default Vue.extend({
  components: {
    'digimon-table': DigimonTable,
  },
  data: () => ({
    search: '',
  }),
});
</script>
