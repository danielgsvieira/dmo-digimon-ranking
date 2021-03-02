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
        class="mx-2"
      >
        Tamer Stats
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline"
        primary-title
      >
        Put your stats from tamer (acessories, chipset, seals, etc):
      </v-card-title>

      <v-card-text>
        <v-row
          no-gutters
          class="pt-4"
        >
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="HP" v-model="stats.hp" />
          </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="DS" v-model="stats.ds" />
          </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="AT" v-model="stats.at" />
          </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="AS" v-model="stats.as" />
          </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="CT" v-model="stats.ct" />
            </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="HT" v-model="stats.ht" />
            </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="DE" v-model="stats.de" />
          </v-col>
          <v-col cols="3" class="text-center px-2">
            <v-text-field type="number" label="EV" v-model="stats.ev" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="resetTamerStats"
        >
          Reset
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="setTamerStats"
        >
          Apply
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { TamerStats } from '@/data/models/TamerStats';
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    dialog: false,
    stats: {
      hp: 0,
      ds: 0,
      at: 0,
      as: 0,
      ct: 0,
      ht: 0,
      de: 0,
      ev: 0,
    },
  }),
  computed: {
    //
  },
  methods: {
    setTamerStats(): void {
      const tamerStats = new TamerStats();
      Object.keys(this.stats).forEach((attr) => {
        tamerStats[attr] = Number.parseFloat(this.stats[attr]);
      });
      this.$store.dispatch('setTamerStats', tamerStats);
    },
    resetTamerStats(): void {
      this.stats = new TamerStats();
      this.$store.dispatch('setTamerStats', this.stats);
    },
  },
  created(): void {
    //
  },
});
</script>
