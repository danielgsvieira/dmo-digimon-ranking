import { ActionTree } from 'vuex';
import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import allDigimons from '@/data/allDigimons';
import { TamerStats } from '@/data/models/TamerStats';
import DRState from './DRState';

const actions: ActionTree<DRState, DRState> = {
  initStore(context): void {
    context.commit('setDigimons', allDigimons.map((el) => new Digimon(el)));
  },
  setFilter(context, filter: Filter): void {
    const filterToStore = JSON.parse(JSON.stringify(filter));
    context.commit('setFilter', filterToStore);
  },
  setTamerStats(context, tamerStats: TamerStats): void {
    const tamerStatsToStore = JSON.parse(JSON.stringify(tamerStats));
    context.commit('setTamerStats', tamerStatsToStore);
  },
};

export default actions;
