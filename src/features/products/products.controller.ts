import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import ProductsService from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductResponse } from './dto/productResponse';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query('brand') brand?: string,
    @Query('category') category?: string,
  ): Promise<ProductResponse[]> {
    if (!category && !brand) {
      return await this.productsService.getAllProducts();
    }
    return await this.productsService.getProductsByFilters({ category, brand });
  }

  @Get('offers')
  getProductsWithOffers() {
    return this.productsService.getProductsWithOffers();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductResponse> {
    return this.productsService.getProductsById(id);
  }

  @Post()
  createProduct(@Body() createProduct: CreateProductDto) {
    return this.productsService.create(createProduct);
  }
}
