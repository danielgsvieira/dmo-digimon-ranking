import { GetterTree } from 'vuex';
import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import DRState from './DRState';

const getters: GetterTree<DRState, DRState> = {
  digimons: (state): Digimon[] => state.digimons,
  filter: (state): Filter => state.filter,
};

export default getters;
