import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import type { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

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

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Product {
    return this.productsService.getProductsById(id);
  }

  @Post()
  createProduct(@Body() createProduct: CreateProductDto) {
    return this.productsService.create(createProduct);
  }
}
