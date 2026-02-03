export interface CreateProduct {
  name: string;
  price: number;
  stock: number;
  pictures: string[];
  fragancia?: string[];
  category?: string;
  description?: string;
}
