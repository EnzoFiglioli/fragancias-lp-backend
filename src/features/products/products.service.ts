import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export default class ProductsService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany({
      include: { category: true, pictures: true, brand: true },
    });
  }
  async getProductsByFilters(filters: {
    brand?: string;
    category?: string;
  }): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: {
        ...(filters.brand && {
          brand: {
            name: filters.brand,
          },
        }),
        ...(filters.category && {
          category: {
            categoryName: filters.category,
          },
        }),
      },
      include: {
        brand: true,
        category: true,
        pictures: true,
      },
    });
  }

  async getProductsById(id: number): Promise<Product> {
    try {
      return await this.prisma.product.findUniqueOrThrow({
        where: { id },
        include: {
          pictures: true,
          category: true,
          brand: true,
        },
      });
    } catch {
      throw new NotFoundException('Product not found');
    }
  }

  async create(product: CreateProductDto) {
    try {
      return await this.prisma.product.create({
        data: {
          ...product,
          pictures: {
            create: product.pictures.map((url) => ({ url })),
          },
        },
        include: {
          category: true,
          pictures: true,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new BadRequestException(error.message);
      }

      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }

      throw new BadRequestException('Unexpected error');
    }
  }

  async getProductsWithOffers() {
    try {
      return this.prisma.product.findMany({
        where: {
          offers: {
            some: {},
          },
        },
        include: {
          offers: true,
          pictures: true,
          category: true,
        },
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
