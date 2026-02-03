/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsString, Min, IsNotEmpty, IsArray } from 'class-validator';
import { CreateProduct } from '../interfaces/create-product.interface';

export class CreateProductDto implements CreateProduct {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(1)
  stock: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsInt()
  @Min(10)
  price: number;

  @IsString()
  @IsNotEmpty()
  @IsArray()
  pictures: string[];
}
