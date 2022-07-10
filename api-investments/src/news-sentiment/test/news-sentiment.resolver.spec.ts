import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { newsSentimentMock } from '../../mocks/news-sentiment';
import { NewsSentimentResolver } from '../news-sentiment.resolver';
import { NewsSentimentService } from '../news-sentiment.service';

describe('NewsSentimentResolver', () => {
  let service: NewsSentimentService;
  let resolver: NewsSentimentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NewsSentimentService,
        NewsSentimentResolver,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() =>
              of({
                data: { feed: newsSentimentMock },
              }),
            ),
          },
        },
      ],
    }).compile();
    service = module.get<NewsSentimentService>(NewsSentimentService);
    resolver = new NewsSentimentResolver(service);
  });
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  describe('newsSentiment', () => {
    it('should find all news sentiment', async () => {
      const newsSentimentFound = await resolver.newsSentiment({
        function: 'NEWS_SENTIMENT',
        tickers: 'GOOG',
        apikey: '9TVXPG5ISQ47OAVJ',
      });
      expect(newsSentimentFound).toStrictEqual(newsSentimentMock);
    });
  });
});
