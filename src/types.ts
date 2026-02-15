export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  isVerified: boolean;
  reputation: number;
}

export interface Spec {
  key: string;
  value: string;
}

export interface BomItem {
  partNumber: string;
  description: string;
  quantity: number;
  manufacturer: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: User;
  tags: string[];
  specs: Spec[];
  bom: BomItem[];
  siliconSeal: boolean; // NFT Minted
  forks: number;
  stars: number;
  price: number | 'Free';
  createdAt: string;
  downloads: number[]; // For chart
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
};

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
