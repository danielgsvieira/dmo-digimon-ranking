export interface RankFilter {
  A: boolean;
  'A+': boolean;
  S: boolean;
  'S+': boolean;
  SS: boolean;
  'SS+': boolean;
  SSS: boolean;
  'SSS+': boolean;
  U: boolean;
  'U+': boolean;
}

export interface FormFilter {
  Rookie: boolean;
  Champion: boolean;
  Ultimate: boolean;
  Mega: boolean;
  'Side Mega': boolean;
  'Burst Mode': boolean;
  Jogress: boolean;
  Variant: boolean;
  Armor: boolean;
  'H-Hybrid': boolean;
  'B-Hybrid': boolean;
  'Z-Hybrid': boolean;
  'O-Hybrid': boolean;
  'Champion X': boolean;
  'Ultimate X': boolean;
  'Mega X': boolean;
  'Side Mega X': boolean;
  'Burst Mode X': boolean;
  'Jogress X': boolean;
}

export interface AttributeFilter {
  None: boolean;
  Virus: boolean;
  Vaccine: boolean;
  Data: boolean;
  Unknown: boolean;
}

export interface ElementalAttributeFilter {
  Land: boolean;
  Fire: boolean;
  Ice: boolean;
  Light: boolean;
  Steel: boolean;
  Neutral: boolean;
  'Pitch Black': boolean;
  Thunder: boolean;
  Water: boolean;
  Wind: boolean;
  Wood: boolean;
}

export class Filter {
  rank: RankFilter = {
    A: true,
    'A+': true,
    S: true,
    'S+': true,
    SS: true,
    'SS+': true,
    SSS: true,
    'SSS+': true,
    U: true,
    'U+': true,
  };

  form: FormFilter = {
    Rookie: true,
    Champion: true,
    Ultimate: true,
    Mega: true,
    'Side Mega': true,
    'Burst Mode': true,
    Jogress: true,
    Variant: true,
    Armor: true,
    'H-Hybrid': true,
    'B-Hybrid': true,
    'Z-Hybrid': true,
    'O-Hybrid': true,
    'Champion X': true,
    'Ultimate X': true,
    'Mega X': true,
    'Side Mega X': true,
    'Burst Mode X': true,
    'Jogress X': true,
  };

  attribute: AttributeFilter = {
    None: true,
    Virus: true,
    Vaccine: true,
    Data: true,
    Unknown: true,
  };

  elementalAttribute: ElementalAttributeFilter = {
    Land: true,
    Fire: true,
    Ice: true,
    Light: true,
    Steel: true,
    Neutral: true,
    'Pitch Black': true,
    Thunder: true,
    Water: true,
    Wind: true,
    Wood: true,
  };
}
