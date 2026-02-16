import { Gender } from '@prisma/client';

type Picture = {
  id: number;
  url: string;
  productId: number;
};

type Category = {
  id: number;
  categoryName: string;
};

export interface Product {
  id: number;
  name: string;
  price: number;
  pictures: Picture[];
  description: string;
  categoryId: number;
  category: Category;
  stock: number | null;
  brandId: number;
  gender: Gender;
}

export type ProductSale = {
  id: number;
  productId: number;
  discount: number;
};
