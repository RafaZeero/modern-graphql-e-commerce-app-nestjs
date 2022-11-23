import { Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';

@Resolver()
export class CategoriesResolver {
  constructor(private readonly _categoriesService: CategoriesService) {}

  @Query(() => [Product])
  async getProducts() {
    return this._categoriesService.getProducts();
  }
}
