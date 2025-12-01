export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PricingItem {
  equipment: string;
  problem: string;
  price: string;
  time: string;
  warranty: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export type LocationType = 'city' | 'neighborhood';