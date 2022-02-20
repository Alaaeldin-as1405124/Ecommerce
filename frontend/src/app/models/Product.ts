export interface Product {
  id: number;
  title:string;
  description: string;
  price: number;
  image: string;
  reviews: Array<{ comment: string; stars: number }>;
}
