import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TickerSentimentType {
  @Field({ nullable: true })
  ticker?: string;

  @Field({ nullable: true })
  relevance_score?: string;

  @Field({ nullable: true })
  ticker_sentiment_score: string;

  @Field({ nullable: true })
  ticker_sentiment_label: string;
}
