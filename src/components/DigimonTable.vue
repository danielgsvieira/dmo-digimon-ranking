<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters>
        <v-col cols="12">
          <v-row no-gutters>
            <span class="headline pl-3">Digimon Ranking</span>
            <v-spacer></v-spacer>
            <digimon-filter></digimon-filter>
          </v-row>
        </v-col>
        <v-col cols="12" class="pt-2">
          <v-row no-gutters justify="end">
            <v-col cols="3">
              <v-text-field
                regular
                hide-details
                label="Search Digimon"
                append-icon="mdi-magnify"
                v-model="search"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table
      dense
      hide-default-footer
      multi-sort
      :headers="headers"
      :items="filteredDigimons"
      :items-per-page="-1"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:item.ct="{ item }">{{ toPercent(item.ct) }}</template>
      <template v-slot:item.ev="{ item }">{{ toPercent(item.ev) }}</template>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Digimon } from '@/data/models/Digimon';
import DigimonFilter from './Filter.vue';
import { Filter } from '../data/models/Filter';

export default Vue.extend({
  components: {
    'digimon-filter': DigimonFilter,
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: 'Rank',
        align: 'center',
        sortable: true,
        value: 'rank.name',
      },
      {
        text: 'Form',
        align: 'center',
        sortable: true,
        value: 'form',
      },
      {
        text: 'Basic Attr.',
        align: 'center',
        sortable: true,
        value: 'basicAttribute',
      },
      {
        text: 'Elemental Attr.',
        align: 'center',
        sortable: true,
        value: 'attribute',
      },
      {
        text: 'DPS (Damage Per Second)',
        align: 'center',
        sortable: true,
        value: 'dps',
      },
      {
        text: 'HP',
        align: 'center',
        sortable: true,
        value: 'hp',
      },
      {
        text: 'DS',
        align: 'center',
        sortable: true,
        value: 'ds',
      },
      {
        text: 'AT',
        align: 'center',
        sortable: true,
        value: 'at',
      },
      {
        text: 'AS',
        align: 'center',
        sortable: true,
        value: 'as',
      },
      {
        text: 'CT',
        align: 'center',
        sortable: true,
        value: 'ct',
      },
      {
        text: 'HT',
        align: 'center',
        sortable: true,
        value: 'ht',
      },
      {
        text: 'DE',
        align: 'center',
        sortable: true,
        value: 'de',
      },
      {
        text: 'EV',
        align: 'center',
        sortable: true,
        value: 'ev',
      },
    ],
  }),
  computed: {
    filteredDigimons(): Digimon[] {
      const filters: Filter = this.$store.getters.filter;
      const allDigimons: Digimon[] = this.$store.getters.digimons;

      return allDigimons.filter((digimon: Digimon) => {
        const shownByRank = filters.rank[digimon.rank.name];
        const shownByForm = filters.form[digimon.form];
        const shownByAttribute = filters.attribute[digimon.attribute];
        const shownByElementalAttribute = filters.elementalAttribute[digimon.elementalAttribute];

        return (
          shownByRank
          && shownByForm
          && shownByAttribute
          && shownByElementalAttribute
        );
      });
    },
  },
  methods: {
    toPercent(value: number): string {
      return `${(value * 100).toFixed(2)}%`;
    },
  },
});
</script>
