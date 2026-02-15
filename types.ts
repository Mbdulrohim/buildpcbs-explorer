
export interface Module {
  id: string;
  name: string;
  author: string;
  price: number;
  forks: number;
  stars: number;
  thumbnail: string;
  tags: string[];
}

export enum AppState {
  INTRO = 'INTRO',
  LANDING = 'LANDING',
}
