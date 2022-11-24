import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { Product } from 'src/products/models/product.model';

@Module({
  providers: [CategoriesService, CategoriesResolver, Product],
})
export class CategoriesModule {}
