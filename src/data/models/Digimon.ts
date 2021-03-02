import { Rank } from './Rank';
import { TamerStats } from './TamerStats';

export type Attribute = 'None'
  | 'Virus'
  | 'Vaccine'
  | 'Data'
  | 'Unknown';

export type ElementalAttribute = 'Land'
  | 'Fire'
  | 'Ice'
  | 'Light'
  | 'Steel'
  | 'Neutral'
  | 'Pitch Black'
  | 'Thunder'
  | 'Water'
  | 'Wind'
  | 'Wood';

export type DigimonForm = 'Rookie'
| 'Champion'
| 'Ultimate'
| 'Mega'
| 'Side Mega'
| 'Burst Mode'
| 'Jogress'
| 'Variant'
| 'Armor'
| 'H-Hybrid'
| 'B-Hybrid'
| 'Z-Hybrid'
| 'O-Hybrid'
| 'Champion X'
| 'Ultimate X'
| 'Mega X'
| 'Side Mega X'
| 'Burst Mode X'
| 'Jogress X';

export interface DigimonInterface {
  url: string;
  rank: Rank;
  form?: DigimonForm;
  name?: string;
  hp?: number;
  ds?: number;
  at?: number;
  as?: number;
  ct?: number;
  ht?: number;
  de?: number;
  ev?: number;
  attribute?: Attribute;
  elementalAttribute?: ElementalAttribute;
}

export class Digimon {
  url: string;

  rank: Rank;

  name: string

  form: DigimonForm;

  hp: number;

  ds: number;

  at: number;

  as: number;

  ct: number;

  ht: number;

  de: number;

  ev: number;

  baseHp: number;

  baseDs: number;

  baseAt: number;

  baseAs: number;

  baseCt: number;

  baseHt: number;

  baseDe: number;

  baseEv: number;

  attribute: Attribute;

  elementalAttribute: ElementalAttribute;

  constructor(data: DigimonInterface) {
    this.url = data.url;
    this.rank = data.rank;
    this.baseAs = (data.as !== undefined) ? Number(data.as.toFixed(4)) : 0;
    this.baseAt = (data.at !== undefined) ? Number(data.at.toFixed(4)) : 0;
    this.baseCt = (data.ct !== undefined) ? Number(data.ct.toFixed(4)) : 0;
    this.baseDe = (data.de !== undefined) ? Number(data.de.toFixed(4)) : 0;
    this.baseDs = (data.ds !== undefined) ? Number(data.ds.toFixed(4)) : 0;
    this.baseEv = (data.ev !== undefined) ? Number(data.ev.toFixed(4)) : 0;
    this.baseHp = (data.hp !== undefined) ? Number(data.hp.toFixed(4)) : 0;
    this.baseHt = (data.ht !== undefined) ? Number(data.ht.toFixed(4)) : 0;
    this.name = (data.name !== undefined) ? data.name : '';
    this.form = (data.form !== undefined) ? data.form : 'Rookie';
    this.attribute = (data.attribute !== undefined) ? data.attribute : 'None';
    this.elementalAttribute = (data.elementalAttribute !== undefined)
      ? data.elementalAttribute
      : 'Neutral';

    this.resetToBase();
  }

  get dps(): number {
    return Number((this.at / this.as).toFixed(2));
  }

  getStatsJson(): string {
    return JSON.stringify(this, null, 2);
  }

  resetToBase(): void {
    this.as = this.baseAs;
    this.at = this.baseAt;
    this.ct = this.baseCt;
    this.de = this.baseDe;
    this.ds = this.baseDs;
    this.ev = this.baseEv;
    this.hp = this.baseHp;
    this.ht = this.baseHt;
  }

  calcWithTamerStats(tamerStats: TamerStats): void {
    this.hp = this.baseHp + tamerStats.hp + Number.parseInt((this.baseAt * 0.54).toFixed(0), 10);
    this.ds = this.baseDs + tamerStats.ds;
    this.at = this.baseAt + tamerStats.at + Number.parseInt((this.baseAt * 1.44).toFixed(0), 10);
    this.as = Number.parseFloat((this.baseAs * (1 - (tamerStats.as / 100))).toFixed(2));
    this.ct = this.baseCt + tamerStats.ct + (this.baseCt * 7.2);
    this.ht = this.baseHt + tamerStats.ht;
    this.de = this.baseDe + tamerStats.de;
    this.ev = this.baseEv + tamerStats.ev + (this.baseEv * 5.76);
  }
}
