import { Digimon } from '@/data/models/Digimon';
import { Filter } from '@/data/models/Filter';
import { TamerStats } from '@/data/models/TamerStats';

export default class DRState {
  digimons: Digimon[] = [];

  filter: Filter = new Filter();

  tamerStats: TamerStats = new TamerStats();
}
