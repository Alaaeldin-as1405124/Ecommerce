import {Product} from "./Product";

export interface Cart {
  total: number;
  products: Array<{ product:Product,amount:number }>;
}
