<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        dark
        v-on="on"
      >
        Filter
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline"
        primary-title
      >
        Filter Digimons by:
      </v-card-title>

      <v-card-text>
        <v-row
          no-gutters
          v-for="filterCategory in filterCategories"
          :key="filterCategory.text"
          class="pt-4"
        >
          <v-col cols="12" class="text-center">
            <span class="subtitle-1 font-weight-bold">{{ filterCategory.text }}</span>
            <v-row no-gutters justify="center">
              <v-col
                cols="3"
                v-for="item in filterCategory.categoryItems"
                :key="item"
                class="text-center"
              >
                <v-row no-gutters justify="center">
                  <v-checkbox
                    class="pa-0 ma-0"
                    dense
                    :label="item"
                    v-model="filter[filterCategory.categoryAttribute][item]"
                  ></v-checkbox>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="resetFilter"
        >
          Reset Filter
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="applyFilter"
        >
          Apply Filter
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Filter } from '@/data/models/Filter';

export default Vue.extend({
  data: () => ({
    dialog: false,
    filter: new Filter() as Filter,
    filterCategories: [
      {
        text: 'Rank',
        categoryAttribute: 'rank',
        categoryItems: ['SSS+', 'SSS', 'SS+', 'SS', 'S+', 'S', 'A+', 'A'],
      },
      {
        text: 'Form',
        categoryAttribute: 'form',
        categoryItems: [
          'Rookie',
          'Champion',
          'Ultimate',
          'Mega',
          'Side Mega',
          'Burst Mode',
          'Jogress',
          'Variant',
          'Armor',
          'H-Hybrid',
          'B-Hybrid',
          'Z-Hybrid',
          'O-Hybrid',
          'Champion X',
          'Ultimate X',
          'Mega X',
          'Side Mega X',
          'Burst Mode X',
          'Jogress X',
        ],
      },
      {
        text: 'Attribute',
        categoryAttribute: 'attribute',
        categoryItems: ['None', 'Virus', 'Vaccine', 'Data', 'Unknown'],
      },
      {
        text: 'Elemental Attribute',
        categoryAttribute: 'elementalAttribute',
        categoryItems: [
          'Land',
          'Fire',
          'Ice',
          'Light',
          'Steel',
          'Neutral',
          'Pitch Black',
          'Thunder',
          'Water',
          'Wind',
          'Wood',
        ],
      },
    ],
  }),
  computed: {
    //
  },
  methods: {
    resetFilter(): void {
      this.$store.dispatch('setFilter', new Filter());
      this.dialog = false;
    },
    applyFilter(): void {
      this.$store.dispatch('setFilter', this.filter);
      this.dialog = false;
    },
  },
  created(): void {
    const filterFromStore = this.$store.getters.filter;

    this.filter = JSON.parse(JSON.stringify(filterFromStore));
  },
});
</script>
