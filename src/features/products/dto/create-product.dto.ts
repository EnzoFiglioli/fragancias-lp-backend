import {
  IsInt,
  IsString,
  Min,
  IsNotEmpty,
  IsEnum,
  IsArray,
} from 'class-validator';
import { Gender } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(0)
  stock: number;

  @IsInt()
  categoryId: number;

  @IsInt()
  brandId: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsInt()
  @Min(10)
  price: number;

  @IsArray()
  @IsString()
  pictures: [];
}
