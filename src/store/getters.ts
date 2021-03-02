import { GetterTree } from 'vuex';
import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import { TamerStats } from '@/data/models/TamerStats';
import DRState from './DRState';

const getters: GetterTree<DRState, DRState> = {
  digimons: (state): Digimon[] => state.digimons,
  filter: (state): Filter => state.filter,
  tamerStats: (state): TamerStats => state.tamerStats,
};

export default getters;
