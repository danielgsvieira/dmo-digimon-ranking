export type Rank = 'A' | 'A+' | 'S' | 'S+' | 'SS' | 'SS+' | 'SSS' | 'SSS+';

export type BasicAttribute = 'None'
  | 'Virus'
  | 'Vaccine'
  | 'Data'
  | 'Unknown';

export type Attribute = 'Land'
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
  link: string;
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
  basicAttribute?: BasicAttribute;
  attribute?: Attribute;
}

export class Digimon {
  link: string;

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

  basicAttribute: BasicAttribute;

  attribute: Attribute;

  constructor(data: DigimonInterface) {
    this.link = data.link;
    this.rank = data.rank;
    this.as = (data.as !== undefined) ? Number(data.as.toFixed(4)) : 0;
    this.at = (data.at !== undefined) ? Number(data.at.toFixed(4)) : 0;
    this.ct = (data.ct !== undefined) ? Number(data.ct.toFixed(4)) : 0;
    this.de = (data.de !== undefined) ? Number(data.de.toFixed(4)) : 0;
    this.ds = (data.ds !== undefined) ? Number(data.ds.toFixed(4)) : 0;
    this.ev = (data.ev !== undefined) ? Number(data.ev.toFixed(4)) : 0;
    this.hp = (data.hp !== undefined) ? Number(data.hp.toFixed(4)) : 0;
    this.ht = (data.ht !== undefined) ? Number(data.ht.toFixed(4)) : 0;
    this.name = (data.name !== undefined) ? data.name : '';
    this.form = (data.form !== undefined) ? data.form : 'Rookie';
    this.basicAttribute = (data.basicAttribute !== undefined) ? data.basicAttribute : 'None';
    this.attribute = (data.attribute !== undefined) ? data.attribute : 'Neutral';
  }

  get dps(): number {
    return Number((this.at / this.as).toFixed(2));
  }

  getStatsJson(): string {
    return JSON.stringify(this, null, 2);
  }
}
