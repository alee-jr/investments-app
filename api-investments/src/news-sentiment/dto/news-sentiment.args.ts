import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class NewsSentimentArgs {
  @Field({ nullable: true })
  tickers?: string;

  @Field({ nullable: true })
  topics?: string;

  @Field({ nullable: true })
  timeFrom?: string;

  @Field({ nullable: true })
  timeTo?: string;

  @Field({ nullable: true })
  sort?: string;

  @Field({ nullable: true })
  limit?: number;
}
