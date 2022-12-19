export interface IMock {
  url: string;
  data: any;
  method: string;
}

export type SortBy = 'brand' | 'model' | 'price' | null;
export type Term = string | null;
