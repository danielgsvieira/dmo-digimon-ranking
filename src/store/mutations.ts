import { MutationTree } from 'vuex';
import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import { TamerStats } from '@/data/models/TamerStats';
import DRState from './DRState';

const mutations: MutationTree<DRState> = {
  setDigimons(state, digimons: Digimon[]) {
    state.digimons = digimons;
  },
  setFilter(state, filter: Filter) {
    state.filter = filter;
  },
  setTamerStats(state, tamerStats: TamerStats) {
    state.tamerStats = tamerStats;
    state.digimons.forEach((digimon) => {
      digimon.calcWithTamerStats(tamerStats);
    });
  },
};

export default mutations;
