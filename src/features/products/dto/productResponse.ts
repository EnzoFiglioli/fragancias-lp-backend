import { Gender } from '@prisma/client';

export type ProductResponse = {
  id: number;
  name: string;
  price: number;
  stock: number | null;
  gender: Gender;
};
