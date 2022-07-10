import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DailyType {
  @Field()
  open: string;

  @Field()
  high: string;

  @Field()
  low: string;

  @Field()
  close: string;

  @Field()
  volume: string;

  @Field()
  date: string;
}
