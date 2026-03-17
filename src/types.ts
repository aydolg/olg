export type Screen = 'overview' | 'portfolio' | 'analysis' | 'vault';

export interface Asset {
  id: string;
  name: string;
  fullName: string;
  type: 'stock' | 'fund' | 'bond' | 'crypto' | 'deposit';
  amount: string;
  cost: number;
  price: number;
  change: number;
  value: number;
}

export interface SecurityActivity {
  id: string;
  type: 'login' | 'upload' | 'update';
  title: string;
  description: string;
  time: string;
  status?: string;
}
