import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DailyModule } from './daily/daily.module';
import { NewsSentimentModule } from './news-sentiment/news-sentiment.module';

@Module({
  imports: [
    DailyModule,
    NewsSentimentModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      debug: false,
      playground: true,
    }),
  ],
})
export class AppModule {}
