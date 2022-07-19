import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewsSentimentType {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  url?: string;

  @Field({ nullable: true })
  time_published?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field({ nullable: true })
  banner_image?: string | null;

  @Field({ nullable: true })
  overall_sentiment_label?: string;
}
