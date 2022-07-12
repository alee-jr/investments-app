import { Field, ObjectType } from '@nestjs/graphql';
import { TickerSentimentType } from './ticker-sentiment.type';
import { TopicsType } from './topics.type';

@ObjectType()
export class NewsSentimentType {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  time_published?: string;

  @Field(() => [String])
  authors?: string[];

  @Field({ nullable: true })
  summary?: string;

  @Field({ nullable: true })
  banner_image?: string | null;

  @Field({ nullable: true })
  source?: string;

  @Field({ nullable: true })
  source_domain?: string;

  @Field({ nullable: true })
  category_within_source?: string;

  @Field(() => [TopicsType], { nullable: true })
  topics?: TopicsType[];

  @Field({ nullable: true })
  overall_sentiment_score?: number;

  @Field({ nullable: true })
  overall_sentiment_label?: string;

  @Field(() => [TickerSentimentType], { nullable: true })
  ticker_sentiment?: TickerSentimentType[];
}
