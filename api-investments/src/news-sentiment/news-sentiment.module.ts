import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NewsSentimentResolver } from './news-sentiment.resolver';
import { NewsSentimentService } from './news-sentiment.service';

@Module({
  imports: [HttpModule],
  providers: [NewsSentimentResolver, NewsSentimentService],
})
export class NewsSentimentModule {}
