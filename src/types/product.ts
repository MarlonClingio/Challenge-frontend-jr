export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratingValues;
}

interface ratingValues {
  rate: number;
  count: number;
}
