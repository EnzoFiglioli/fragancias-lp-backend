import { Injectable, NotFoundException } from '@nestjs/common';
import products from '../../utils/data/data';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  getAllProducts(): Product[] {
    return products;
  }
  getProductsByCategory(category: string): Product[] {
    const filteredProducts = products.filter(
      (product) => product.category === category,
    );
    if (filteredProducts.length > 0) {
      return filteredProducts;
    }
    throw new NotFoundException('No products found for the specified category');
  }

  getProductsById(id: number): Product {
    const product = products.find((prod) => prod.id === id);

    if (product) return product;
    throw new NotFoundException('Product not found');
  }

  create(product: CreateProductDto): void {
    products.push({
      ...product,
      id: products.length + 1,
    });
  }
}
