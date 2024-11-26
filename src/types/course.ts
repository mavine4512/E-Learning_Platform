export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  category: string;
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  popularity: number;
  image: string;
  progress?: number;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  skillLevel: string;
  sortBy: 'popularity' | 'price_low_to_high' | 'price_high_to_low';
}