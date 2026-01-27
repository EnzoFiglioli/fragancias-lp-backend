import { Controller, Get, Query } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(@Query('category') category: string): Product[] {
    if (!category) {
      return this.productsService.getAllProducts();
    }
    return this.productsService.getProductsByCategory(category);
  }
}
