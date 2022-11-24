import { Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/products/models/product.model';
import { CategoriesService } from './categories.service';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly _categoriesService: CategoriesService) {}

  @Query(() => [Product])
  async getProducts() {
    return this._categoriesService.getProducts();
  }
}
