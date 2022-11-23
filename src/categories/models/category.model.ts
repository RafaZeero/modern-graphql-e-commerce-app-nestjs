import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  readonly id: string;
  @Field()
  readonly name: string;
}
