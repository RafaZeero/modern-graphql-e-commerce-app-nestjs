import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './models/category.model';
import { CategoryDocument } from './models/category.schema';

@Injectable()
export class CategoriesRepository {
  protected readonly logger = new Logger(CategoriesRepository.name);

  constructor(
    @InjectModel(Category.name) categoryModel: Model<CategoryDocument>,
  ) {
    // TODO: Add abstractRepository!!
    // super(categoryModel);
  }
}
