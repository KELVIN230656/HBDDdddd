export interface CelebrantProfile {
  name: string;
  age?: number | string;
  senderName: string;
  date: string;
}

export type WishTone = 'heartfelt' | 'humorous' | 'inspiring' | 'hype';

export interface WishMessage {
  id: WishTone;
  label: string;
  quote: string;
  badge: string;
  preview: string;
}

export interface SurpriseGift {
  id: string;
  title: string;
  description: string;
  tag: string;
  code: string;
}

export type CelebrationTheme = 'champagne' | 'midnight' | 'rose';
