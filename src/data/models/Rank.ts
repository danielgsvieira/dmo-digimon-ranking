export type RankName = 'A' | 'A+' | 'S' | 'S+' | 'SS' | 'SS+' | 'SSS' | 'SSS+' | 'U' | 'U+';

export class Rank {
  constructor(
    public name: RankName,
    public url: string,
  ) {
    //
  }
}
