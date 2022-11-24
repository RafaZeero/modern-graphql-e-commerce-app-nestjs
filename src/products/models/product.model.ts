import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field()
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly quantity: number;
  @Field()
  readonly image: string;
  @Field()
  readonly price: number;
  @Field()
  readonly onSale: boolean;
  @Field()
  readonly categoryId: string;
}
