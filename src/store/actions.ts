import { ActionTree } from 'vuex';
import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import allDigimons from '@/data/allDigimons';
import DRState from './DRState';

const actions: ActionTree<DRState, DRState> = {
  initStore(context): void {
    context.commit('setDigimons', allDigimons.map((el) => new Digimon(el)));
  },
  setFilter(context, filter: Filter): void {
    const filterToStore = JSON.parse(JSON.stringify(filter));
    context.commit('setFilter', filterToStore);
  },
};

export default actions;
