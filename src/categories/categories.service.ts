import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(private readonly _categoriesRepository: CategoriesRepository) {}

  async getCategories() {
    const categories = await this._categoriesRepository.getCategories();

    return categories;
  }
}
