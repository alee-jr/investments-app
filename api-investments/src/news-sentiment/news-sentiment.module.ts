import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsSentimentResolver } from './news-sentiment.resolver';
import { NewsSentimentService } from './news-sentiment.service';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [NewsSentimentResolver, NewsSentimentService],
})
export class NewsSentimentModule {}
