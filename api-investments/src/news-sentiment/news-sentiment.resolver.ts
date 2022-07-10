import { Args, Query, Resolver } from '@nestjs/graphql';
import { NewsSentimentService } from './news-sentiment.service';
import { NewsSentimentArgs } from './dto/news-sentiment.args';
import { NewsSentimentType } from './dto/news-sentiment.type';

@Resolver(() => NewsSentimentType)
export class NewsSentimentResolver {
  constructor(private readonly newsSentimentService: NewsSentimentService) {}

  @Query(() => [NewsSentimentType])
  async newsSentiment(@Args() newsSentimentArgs: NewsSentimentArgs) {
    return this.newsSentimentService.findAll(newsSentimentArgs);
  }
}
