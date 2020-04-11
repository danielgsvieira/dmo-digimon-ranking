import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';

export default class DRState {
  digimons: Digimon[] = [];

  filter: Filter = new Filter();
}
