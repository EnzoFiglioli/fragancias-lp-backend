import { Injectable, NotFoundException } from '@nestjs/common';
import products from '../../utils/data/data';

@Injectable()
export class ProductsService {
  getAllProducts() {
    return products;
  }
  getProductsByCategory(category: string) {
    const filteredProducts = products.filter(
      (product) => product.category === category,
    );
    if (filteredProducts.length > 0) {
      return filteredProducts;
    }
    throw new NotFoundException('No products found for the specified category');
  }
}
