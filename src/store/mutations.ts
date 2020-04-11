import { MutationTree } from 'vuex';
import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import DRState from './DRState';

const mutations: MutationTree<DRState> = {
  setDigimons(state, digimons: Digimon[]) {
    state.digimons = digimons;
  },
  setFilter(state, filter: Filter) {
    state.filter = filter;
  },
};

export default mutations;
